import Bracket from './components/Composition/Bracket';
import Emoji from './components/Composition/Emoji';
import Text from './components/Composition/Text';
// eslint - disable - next - line;
const App = function () {
    return (
        <Emoji>
            {({ addemoji }) => (
                <Bracket>
                    {({ addBracket }) => <Text addEmoji={addemoji} addBracket={addBracket} />}
                </Bracket>
            )}
        </Emoji>
    );
};

export default App;

// ekta parent component chaile tar props er children e ekta function call kore tar vitor argument hisave parent component er info dite pare , sei  function ta argument pele onno component return korte pare
// ekhane baki sob component independent ekhn amra just chaile use korbo ekhn, kicuta ekta component tar function sell korar moto , chaile seta children use korte pare
// amra chaile emoji er vitore function ja likchi seta props akare text e pathaite pari , bracket component keow same vabe props akare text e function pathate hoi but amra jodi onk gula component er characteristics ekbare ante chai ekta component e taile composition better,
