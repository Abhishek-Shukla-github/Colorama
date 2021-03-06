import { withStyles } from '@material-ui/styles';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox=SortableElement((props)=>{
    const {classes,handleClick,color,name}=props;
    return (
        <div className={classes.root} style={{backgroundColor:color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <span><DeleteIcon className={classes.deleteIcon} onClick={()=>handleClick(name)}/></span>
            </div>
        </div>
    )
});

export default withStyles(styles)(DraggableColorBox);