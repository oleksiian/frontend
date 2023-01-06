module.exports = function(grunt) {
  grunt.initConfig({
    ejs: {
      all: {
        src: ['app/**/*.ejs', '!app/partials/**/*'],
        dest: 'dist/',
        expand: true,
        ext: '.html',
      },
    },
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          'styles/sass.css' : 'scss/styles.scss'
        }
      },
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      html: {
        files: '**/*.ejs',
        tasks: ['ejs']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ejs');
  grunt.registerTask('default',['watch']);
}
