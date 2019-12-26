import request from "../../../common/networking/URLRequest";

export default class MomentService {
  constructor(request = request) {
    this.request = request;
  }

  fetchMoments = () => {
    this.request("https://emagrorrim.github.io/mock-api/moments.json")
        .responseJSON()
        .then(moments => {
          console.log(moments[0]);
        })
        .catch(error => {
          console.log(error);
        });
  }
}