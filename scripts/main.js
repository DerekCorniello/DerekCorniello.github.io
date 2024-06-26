// Wait until the HTML document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    function loadScript(url, callback, errorCallback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = callback;
        script.onerror = errorCallback;
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


    // Load the clock script and draw the clock
    loadScript(
        "https://waph-uc.github.io/clock.js",
        function() {
            var canvas = document.getElementById("analog-clock");
            var ctx = canvas.getContext("2d");
            var radius = canvas.height / 2;
            ctx.translate(radius, radius);
            radius = radius * 0.90;
            setInterval(drawClock, 500);

            function drawClock() {
                displayTime();
                updateDigitalTime();
                drawFace(ctx, radius);
                drawNumbers(ctx, radius);
                drawTime(ctx, radius);
            }
        },
        function() {
            document.getElementById("clock-failure-message").style.display = "block";
            document.getElementById("analog-clock").style.display = "none";
        }
    );

    setInterval(updateDigitalTime, 500)
    function loadJokeSection() {
        // Fetch a joke from the jokeAPI
        $.get("https://v2.jokeapi.dev/joke/Any", function(result) {
            console.log("From jokeAPI: " + JSON.stringify(result));

            // Check if the joke is safe
            if (result.safe) {
                if (result.type === "single") {
                    $("#joke").html(result.joke);
                    $("#joke-punchline").hide(); // Hide punchline for single jokes
                } else {
                    $("#joke").html(result.setup);
                    $("#joke-punchline").html("Click to reveal the punchline!").show(); // Show prompt for punchline

                    // Add a click event listener to show the punchline
                    $("#joke-punchline").off('click').on('click', function() {
                        $(this).html(result.delivery).off('click'); // Show the punchline and remove click event
                    });
                }
            } else {
                // If the joke is not safe, call the function again to get a new joke
                loadJokeSection();
            }
        });

    }

    function loadMemeSection() {
        // Fetch the random meme
        $.get("https://meme-api.com/gimme", function(result) {
            console.log("From Meme API: " + JSON.stringify(result));
            if (result.nsfw === false) {
                // Display the meme image and alt text
                $("#meme-img").attr("src", result.url).attr("alt", result.alt);
                $("#meme-title").text(`u/${result.author} posted in r/${result.subreddit}:`);
                $("#meme-title").attr("href", result.postLink);
                $("#meme-descr").text(result.title);
            } else {
                loadMemeSection();
            }
        });
    }

    function loadComedySection() {
        loadMemeSection();
        loadJokeSection();
    }

    // Initial load and refresh every 60 seconds
    loadComedySection();
    setInterval(loadComedySection, 60000);

    // Vue.js instance!
    new Vue({
        el: '#app',
        data: {
            // I know I don't need this, but I wanted the experience with doing it differently
            username: 'DerekCorniello',
            languages: null,
        },
        created() {
            this.fetchGithubLanguages();
        },
        methods: {
            // Fetch GitHub languages
            // Asynchronous function that fetches the lines of languages I have used in my reposResponse
            // Changes them to percentages, and uses Chart.js to create a nice chart!
            async fetchGithubLanguages() {
                try {
                    const reposResponse = await axios.get(`https://api.github.com/users/${this.username}/repos`, {
                        headers: {
                            'User-Agent': 'request',
                            "Authorization": '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'
                        }
                    });
                    const repoNames = reposResponse.data.map(entry => entry.name);
                    console.log(repoNames);
                    const languagePromises = repoNames.map(repo => axios.get(`https://api.github.com/repos/${this.username}/${repo}/languages`, {
                        headers: {
                            'User-Agent': 'request',
                            "Authorization": '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'
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
                    document.getElementById("languageChart-failure-message").style.display = "block";
                    document.getElementById("languageChart").style.display = "none";
                }
            },

            createChart() {
                const ctx = document.getElementById('languageChart').getContext('2d');
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

                        }]
                    },
                    options: {
                        responsive: false,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                labels: {
                                    color: "#FFFFFF",
                                    usePointStyle: true,
                                },
                                position: 'bottom'
                            }
                        }
                    }
                });
            }
        },
    });
});
