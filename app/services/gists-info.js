import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class GistsInfoService extends Service {
  @tracked gists = [1, 2, 3];

  addGist(gist) {
    this.gists.addObject(gist);
  }
}
