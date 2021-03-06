ej.addCulture( "en-IE", {
	name: "en-IE",
	englishName: "English (Ireland)",
	nativeName: "English (Ireland)",
	numberFormat: {
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-$n","$n"],
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			AM: ["am","am","AM"],
			PM: ["pm","pm","PM"],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dd MMMM yyyy HH:mm",
				F: "dd MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});