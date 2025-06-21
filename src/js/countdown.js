simplyCountdown(".simply-countdown", {
	year: 2026, // Target year (required)
	month: 6, // Target month [1-12] (required)
	day: 28, // Target day [1-31] (required)
	hours: 0, // Target hour [0-23], default: 0
	minutes: 0, // Target minute [0-59], default: 0
	seconds: 0, // Target second [0-59], default: 0
	words: {
		// Custom labels, with lambda for plurals
		days: { root: "hari", lambda: (root, n) => (n > 1 ? root + "" : root) },
		hours: { root: "jam", lambda: (root, n) => (n > 1 ? root + "" : root) },
		minutes: { root: "menit", lambda: (root, n) => (n > 1 ? root + "" : root) },
		seconds: { root: "detik", lambda: (root, n) => (n > 1 ? root + "" : root) },
	},
});
