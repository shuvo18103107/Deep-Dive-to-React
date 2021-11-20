import Clock from './Clock';

const ClockList = function ({ quantity = [] }) {
    return (
        <div>
            {quantity.map((el) => (
                <Clock key={el} />
            ))}
        </div>
    );
};
export default ClockList;
