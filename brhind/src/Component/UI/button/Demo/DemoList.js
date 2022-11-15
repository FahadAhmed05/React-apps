import React, { useMemo } from "react";
import classes from './DemoList.module.css';

const DemoList = (props) => {
    const { items } = props;

    const sortedList = useMemo(() => {
        console.log('Items Sorte')
       return items.sort((a, b) => a-b);
    } , [items])
    console.log('DEMOLIST RUNNING...')

    return(
        <div className={classes.list}>
          <h2>{props.title}</h2>
          <ul>
            {sortedList.map((item) => (
                <ol key={item}>{item}</ol>
            ))}
          </ul>
        </div>
    )
};
export default React.memo(DemoList);