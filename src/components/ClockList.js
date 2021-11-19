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

// eikhane ami props e kinttu ekta array pathaccii sei array er upor map kore new component create korci jeta ekta transformed array of components dibe but jsx array of component pele seta array te na rekhe porpor list akare return kore
// jsx single eleemnt nei othoba array of eleemnt nei
// react dom e proti element er ekta unique identifier key set kore dei , ekhane clock component ta amra js way te korci tai ekhane clock component gulai unique key ta missing tai map korar somoi proti ta el amra key hisave component e use korbo ekhane key ta react er define kora props
// onksomoi amra server theke array naow pete pari ekta obj pai tokhn setate normally ekta unique identifier thake r jodi na thake tokhn map er 2nd parameter jeta index seta use korbo echaraow js er math.random() o use kora jai
