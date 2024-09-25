import React from "react";
import Button from '../Button/Button'
import Select from '../Select/Select'

const Bar: React.FC = () => (
    <div className="w-full flex justify-between mb-8">
        <div className="flex flex-row">
            <Select
            icon="mingcute:settings-6-line"
            backgroundColor='#FFCBCB'
            iconColor='#FF4949'
            >
                <button className="px-2">Time</button>
                <button className="px-2">Words</button>
                <button className="px-2">Sentences</button>
            </Select>

            <div className="w-4"></div>

            <Select
            icon="mingcute:dashboard-4-line"
            backgroundColor='#B9D9FF'
            iconColor='#6EAFFC'
            >
                <button className="px-2">15</button>
                <button className="px-2">30</button>
                <button className="px-2">60</button>
            </Select>
        </div>

        <div>
            <Button
                label='Multiplayer'
                icon="mingcute:game-2-line"
                backgroundColor='#5CFA88'
            />
        </div>
    </div>
);

export default Bar;