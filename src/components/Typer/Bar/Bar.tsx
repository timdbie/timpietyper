import { BarProps } from './Bar.types';
import Select from '../../Select/Select';

const Bar: React.FC<BarProps> = ({ handleTimerDurationChange }) => {
    return (
        <div className="w-full flex flex-col mb-8">
            <div className="flex justify-between mb-4">
                <div className="flex flex-row">
                    <Select
                        icon="mingcute:settings-6-line"
                        backgroundColor='#FFCBCB'
                        iconColor='#FF4949'
                    >
                        <button className="px-2" onClick={() => handleTimerDurationChange(15)}>15</button>
                        <button className="px-2" onClick={() => handleTimerDurationChange(30)}>30</button>
                        <button className="px-2" onClick={() => handleTimerDurationChange(60)}>60</button>
                    </Select>
                    <div className="w-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Bar;
