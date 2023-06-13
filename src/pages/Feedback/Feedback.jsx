import React from 'react';
import { useParams } from 'react-router-dom';
import { makeFeedback } from '../../api/utilites';

const Feedback = () => {
    const id=useParams();
    const feedbackId=id.id;
    const handelSubmitFeedBack=(e)=>{
        e.preventDefault();
        const feedback=e.target.comment.value;
        e.target.comment.value=''
        makeFeedback(feedbackId,feedback).then(data=>console.log(data))
    }
    return (
        <div className='shadow-lg p-12 mx-auto w-1/2 mt-12 rounded-lg'>
            <form onSubmit={handelSubmitFeedBack}>
                <input type="text" name='comment' placeholder="Type here" className="input input-bordered w-full max-w-xs mr-2" />
                <input className='px-3 py-2 bg-[#eec03f]' type="submit" value="FeedBack" />
            </form>
        </div>
    );
};

export default Feedback;