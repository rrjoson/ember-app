import { action } from "@ember/object";
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class AddGistComponent extends Component {
  @service gistsInfo;
  get shownGists() {
    let gists = this.gistsInfo.gists;
    return gists;
  }
  @action
  addFile(description) {
    this.args.addGistInfo(description);
  }
}
