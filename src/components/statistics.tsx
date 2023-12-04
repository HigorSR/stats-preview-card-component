function Statistics() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 text-center text-white mb-8 lg:flex-row lg:justify-start lg:text-start lg:gap-12 lg:mb-0">
            <div>
                <p className="text-2xl mb-1">10k+</p>
                <p className="text-Slightly-transparent-white(main-paragraph) uppercase text-[10px] font-extralight tracking-[0.12rem]		">companies</p>
            </div>
            <div>
                <p className="text-2xl mb-1">314</p>
                <p className="text-Slightly-transparent-white(main-paragraph) uppercase text-[10px] font-extralight tracking-[0.12rem]	">templates</p>
            </div>
            <div>
                <p className="text-2xl mb-1">12m+</p>
                <p className="text-Slightly-transparent-white(main-paragraph) uppercase text-[10px] font-extralight tracking-[0.12rem]	">queries</p>
            </div>
        </div>
    );
}

export default Statistics;