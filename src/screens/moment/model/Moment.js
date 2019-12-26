import UUID from 'react-native-uuid';

export default ({content, sender, images, comments}) => new Moment(sender, content, images, comments);

class Moment {
  constructor(sender, content, images, comments) {
    this.id = UUID();
    this.sender = sender;
    this.content = content;
    this.images = images;
    this.comments = comments;
  }
}
