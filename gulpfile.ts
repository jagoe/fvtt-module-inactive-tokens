import {parallel, series, task} from 'gulp'
import * as tasks from './.gulp/tasks'

task('clean', tasks.clean)
task('compile', async () => await tasks.compile('prod'))
task('compile:dev', async () => await tasks.compile('dev'))
task('copy:static', tasks.copyStatic)

task('build', series('clean', parallel('compile', 'copy:static')))
task('build:dev', series('clean', parallel('compile:dev', 'copy:static')))
