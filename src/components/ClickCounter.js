import withCounter from './HOC/withCounter';

const ClockCounter = function (props) {
    const { value, handler } = props;
    return (
        <div>
            <button type="button" onClick={handler}>
                Clicked {value} times
            </button>
        </div>
    );
};

export default withCounter(ClockCounter); // new ekta component return kore with state
// ekhn ei component state gula ekta function e thakbe sekhan theke props akare jinista pabo s
