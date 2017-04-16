import { watchFetchProjects } from './projects'

export default function* rootSaga() {
  yield [
    watchFetchProjects()
  ]
}
