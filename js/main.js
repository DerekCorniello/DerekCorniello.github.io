// Wait until the HTML document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Function to load a script file
    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = callback;
        document.body.appendChild(script);
    }

    // Function to update the digital time, under the analog clock
    function updateDigitalTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const amOrPm = hours >= 12 ? 'PM' : 'AM';

        hours = (hours % 12 || 12).toString().padStart(2, '0');
        document.getElementById("digital-time").innerHTML = `${hours}:${minutes} ${amOrPm}`;
    }

    // Load the clock script and draw the clock
    loadScript("https://waph-uc.github.io/clock.js", function() {
        var canvas = document.getElementById("analog-clock");
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90;
        setInterval(drawClock, 500);

        function drawClock() {
            drawFace(ctx, radius);
            drawNumbers(ctx, radius);
            drawTime(ctx, radius);
            updateDigitalTime();
        }
    });

    // Vue.js instance!
    new Vue({
        el: '#app',
        data: {
            username: 'DerekCorniello',
            languages: null,
            //GitHub only allows for 60 calls to the api per hour, which only allows about 4-5 reloads per hour without a PAT
            //token: ''
        },
        created() {
            this.fetchGithubLanguages();
        },
        methods: {
            // Fetch GitHub languages
            // Asynchronous function that fetches the lines of languages I have used in my reposResponse
            // Changes them to percentages, and uses Chart.js to create a nice chart!
            async fetchGithubLanguages() {
                console.log("github-languages")
                try {
                    const reposResponse = await axios.get(`https://api.github.com/users/${this.username}/repos`, {
                        headers: {
                            'Authorization': `token ${this.token}`
                        }
                    });
                    const repos = reposResponse.data;
                    const languagePromises = repos.map(repo => axios.get(repo.languages_url, {
                        headers: {
                            'Authorization': `token ${this.token}`
                        }
                    }));
                    const languagesResponses = await Promise.all(languagePromises);

                    let totalLines = 0;
                    const languageCounts = languagesResponses.reduce((acc, response) => {
                        const languages = response.data;
                        for (let [language, lines] of Object.entries(languages)) {
                            if (!acc[language]) {
                                acc[language] = 0;
                            }
                            acc[language] += lines;
                            totalLines += lines;
                        }
                        return acc;
                    }, {});

                    // Calculate percentages
                    for (let language in languageCounts) {
                        languageCounts[language] = +((languageCounts[language] / totalLines) * 100).toFixed(2);
                    }

                    this.languages = languageCounts;
                    this.$nextTick(() => {
                        this.createChart();
                    });
                } catch (error) {
                    console.error('Error fetching GitHub languages:', error);
                }
            },
            createChart() {
                const ctx = document.getElementById('languageChart').getContext('2d');
                console.log("create chart")
                // If the chart already exists, destroy it so there are not multiple instances
                if (this.chart) {
                    this.chart.destroy();
                }

                this.chart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: Object.keys(this.languages),
                        datasets: [{
                            data: Object.values(this.languages),
                            backgroundColor: ['#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#4BC0C0',
                                '#9966FF',
                                '#FF9F40',
                                '#FFCD56',
                                '#C9CBCF',
                                '#6AC259',
                                '#F8FF09']
                        }]
                    },
                    options: {
                        responsive: false,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                labels: {
                                    color: "#FFFFFF"
                                }
                            }
                        }
                    }
                });
            }
        },
    });

    // Function to display the time in the footer
    function displayTime() {
        const now = new Date();

        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = daysOfWeek[now.getDay()];

        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();

        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const amOrPm = hours >= 12 ? 'PM' : 'AM';

        hours = (hours % 12 || 12).toString().padStart(2, '0');
        const formattedDate = `${dayOfWeek}, ${month}/${day}/${year} - ${hours}:${minutes} ${amOrPm}`;
        document.getElementById('footer-time').innerHTML = formattedDate;
    }
    setInterval(displayTime, 500)
});
