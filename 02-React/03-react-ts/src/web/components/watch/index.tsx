import * as React from 'react';

import './styles.css';

type TimeProps = {
    time: string;
    timeZone: string;
};
export function Time({ time, timeZone }: TimeProps) {
    return (
        <p className={'Time'}>
            Time in {timeZone}: {time}
        </p>
    );
}
type WatchProps = {
    timeZone: 'America/New_York' | 'Europe/Madrid' | 'Europe/London';
};
type WatchState = {
    currentTime: Date;
};
// export class Watch extends React.Component<WatchProps, WatchState> {
//     private intervalId: number | undefined = undefined;
//     constructor(props: WatchProps) {
//         super(props);
//         this.state = { currentTime: new Date() };
//     }

//     componentDidMount() {
//         this.intervalId = window.setInterval(() => {
//             console.log('Pintame!');
//             this.setState({ currentTime: new Date() });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         window.clearInterval(this.intervalId);
//     }

//     render() {
//         const timeInCountry = new Date(
//             this.state.currentTime.toLocaleString(undefined, {
//                 timeZone: this.props.timeZone
//             })
//         );
//         const time = `${timeInCountry.getHours()}:${timeInCountry.getMinutes()}:${timeInCountry.getSeconds()}`;
//         return (
//             <div className='Watcher'>
//                 <Time time={time} timeZone={this.props.timeZone} />
//             </div>
//         );
//     }
// }
export function Watch(props: WatchProps) {
    const [currentTime, setCurrentTime] = React.useState(new Date());
    React.useEffect(() => {
        // CDM
        const intervalId = window.setInterval(() => {
            console.log('Pintame!');
            setCurrentTime(new Date());
        }, 1000);
        // CWU
        return () => {
            window.clearInterval(intervalId);
        };
    }, []);
    const timeInCountry = new Date(
        currentTime.toLocaleString(undefined, {
            timeZone: props.timeZone
        })
    );
    const time = `${timeInCountry.getHours()}:${timeInCountry.getMinutes()}:${timeInCountry.getSeconds()}`;
    return (
        <div className='Watcher'>
            <Time time={time} timeZone={props.timeZone} />
        </div>
    );
}
export default Watch;
