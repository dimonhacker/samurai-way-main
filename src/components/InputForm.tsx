import React from 'react';
import {Button, TextField} from "@mui/material";

export const InputForm = () => {
    return (
        <>
            <TextField sx={{background: 'white'}}/>
            <div>
                <Button variant={"outlined"} sx={{background: 'white'}}>Add post</Button>
            </div>
        </>
    );
};
