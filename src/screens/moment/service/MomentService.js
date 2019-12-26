import URLRequest from "../../../common/networking/URLRequest";
import Moment from "../model/Moment";

export default class MomentService {
  constructor(request = URLRequest) {
    this.request = request;
  }

  fetchMoments: () => Promise<Moment | Error> = () =>
      this.request("https://emagrorrim.github.io/mock-api/moments.json")
          .responseJSON()
          .then(moments => moments.map(json => Moment(json)))
}
