import React from 'react'
import {app} from './base.js'

const Upload = () => {
    const [fileUrl, setFileUrl] = React.useState(null)

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fileUrl)
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='file' onChange={(e)=>onFileChange(e)}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Upload