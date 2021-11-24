import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { AddCommentForm } from '../AddCommentForm'
import { Comment } from '../Comment'
import data from "../../data"



export const PostComments: React.FC = () => {
    const [activeTab, setActiveTab] = useState<0 | 1>(0)
    const comments = data.comments[activeTab ? "new" : "popular"]
    return (
        <Paper elevation={0} className="mt-40 p-30">
            <div className="container">
                <Typography className="mb-20" variant="h6">
                    476 комментариев
                </Typography>
                <Tabs
                    onChange={(_, newValue) => setActiveTab(newValue)}
                    indicatorColor="primary"
                    textColor="primary"
                    value={activeTab}>
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                <AddCommentForm />
                <div className="mb-20" />
                {
                    comments.map(obj => (
                        <Comment {...obj} />
                    ))
                }
            </div>
        </Paper>
    )
}
