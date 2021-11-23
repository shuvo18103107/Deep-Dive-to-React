import Emoji from './Emoji';

export default class Text extends Emoji {
    // parent class er property r method acess chaile super call korte hobe constructor e
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    // parent class er method use korte chaile super diye erpr oi method name
    render() {
        const decoratedText = super.addEmoji('React e boss hobo ami', '🔥');
        return super.render(decoratedText);
    }
}

// ekhn ei inheritence er somosaa hoilo ekta component r ektar upor tightly coupled
