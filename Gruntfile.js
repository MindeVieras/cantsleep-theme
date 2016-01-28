/*global module:false*/
module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
	uglify: {
	  dist: {
	    files: [{
			expand: true,
			cwd: 'deploy/scripts',
			src: '*.js',
			dest: 'deploy/js'
		}]
	  }
	},
	cssmin: {
		target: {
			files: [{
				expand: true,
				cwd: 'deploy/css',
				src: ['*.css', '!*.min.css'],
				dest: 'deploy/css',
				ext: '.min.css'
			}]
		}
	},
	compass: {
		dist: {
			options: {
				sassDir: 'deploy/sass',
				cssDir: 'deploy/css'
			}
		}
	},
	"ftp-deploy": {
	  build: {
	    auth: {
	      host: 'ftp.mindelis.com',
	      port: 21,
	      authKey: 'key'
	    },
	    src: 'deploy',
	    dest: '/cantsleep/sites/all/themes/custom/csclub',
	    exclusions: ['deploy/sass', 'deploy/images', 'deploy/scripts', 'deploy/css/styles.css', 'deploy/css/fonts', 'deploy/screenshot.png']
	  }
	},
	watch: {
		scripts: {
			files: ['deploy/scripts/*.js'],
			tasks: ['newer:uglify:dist']
		},
		sass: {
			files: 'deploy/sass/*.scss',
			tasks: ['compass', 'cssmin']
		},
		ftp: {
			files: ['deploy/csclub.info', 'deploy/css/*.css', 'deploy/scripts/*.js', 'deploy/templates/*.php'],
			tasks: ['ftp-deploy:build']
		}
	}
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  // Default task.
  grunt.registerTask('default', ['compass', 'cssmin']);
  
  // Testing tasks
  

};
