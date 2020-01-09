import UUID from 'react-native-uuid';

export default ({content, sender, images, comments}): Moment => new Moment(sender, content, images, comments);

class Moment {
  constructor(sender: User, content: string, images: Array<WebImage>, comments: Array<Comment>) {
    this.id = UUID();
    this.sender = new User(sender || {});
    this.content = content;
    this.images = (images || []).map(img => new WebImage(img));
    this.comments = (comments || []).map(comment => new Comment(comment));
  }
}

class User {
  constructor({avatar, nick, username}) {
    this.id = UUID();
    this.avatar = avatar;
    this.nick = nick;
    this.username = username;
  }
}

class WebImage {
  constructor({url}) {
    this.url = url;
  }
}

class Comment {
  constructor({sender, content}) {
    this.id = UUID();
    this.sender = new User(sender);
    this.content = content;
  }
}
