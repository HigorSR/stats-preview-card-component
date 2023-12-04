import Statistics from "./statistics";
import TitleText from "./title-text";

function Description() {
    return (
        <div className="flex flex-col gap-8  lg:justify-between lg:p-14 lg:">
            <TitleText />
            <Statistics />
        </div>
    );
}

export default Description;