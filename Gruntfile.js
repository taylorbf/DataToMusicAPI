module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            target: {
                src: [
                    'misc/start.js',
                    'src/core.js',
                    'src/osc.js',
                    'src/analyzer.js',
                    'src/transform.js',
                    'src/array.js',
                    'src/collection.js',
                    'src/value.js',
                    'src/iterator.js',
                    'src/parser.js',
                    'src/data.js',
                    'src/clock.js',
                    'src/instrument.js',
                    'src/model.js',
                    'src/synth.js',
                    'src/synth2.js',
                    'src/stream.js',
                    //'src/voice.js',
                    'src/master.js',
                    'src/guido.js',
                    'src/inscore.js',
                    'src/models/rhythm.js',
                    'src/models/chord.js',
                    'src/models/scale.js',
                    'src/models/phrase.js',
                    'src/models/instr.js',
                    'src/models/form.js',
                    'src/models/song.js',
                    'src/models/scales/synthetic.js',
                    'src/models/playback.js',
                    //'src/models.rhythm/clave-models.rhythm.js',
                    //'src/instr/single-note.js',
                    //'src/instr/short-noise.js',
                    //'src/instr/nice-chords.js',
                    //'src/instr/models.rhythm-seq.js',
                    //'src/instr/sampler.js',
                    //'src/instr/clave.js',
                    //'src/instr/tamborim.js',
                    'src/beltline/bl-motif.js',
                    'src/beltline/bl-piano.js',
                    'misc/end.js'
                ],
                dest: 'dtm.js'
            }
        },

        jsdoc: {
            dist: {
                src: ['src/*.js'],
                jsdoc: 'jsdoc',
                options: {
                    destination: 'doc',
                    configure: 'conf.json',
                    template: './node_modules/ink-docstrap/template'
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dtm_min.js': ['bower_components/lodash/dist/lodash.underscore.js', 'dtm.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat']);
};