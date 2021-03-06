/**
 * concatenate scripts together for dev
 */
module.exports = function exportConcat(grunt) {
	grunt.config.set('concat', {
		js: {
			options: {
				stripBanners: true,
				banner: '<%= banner %>',
			},
			files: {
				'<%= distPath %>lib.js': [
					'lib/jquery/dist/jquery.min.js',
					'lib/jquery-ui/jquery-ui.min.js',
					'lib/bootstrap/dist/js/bootstrap.min.js',
					'lib/lodash/lodash.min.js',
					'lib/moment/min/moment.min.js',
					'lib/touch-punch/jquery.ui.touch-punch.min.js',
					'src/external/**/*.js'
				],
				'<%= distPath %>main.js': [
					'src/services/mc.js',
					'src/js/app.js',
					'src/services/*.js',
					'src/js/**/*.js'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
