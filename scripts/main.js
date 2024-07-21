// Wait until the HTML document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
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
