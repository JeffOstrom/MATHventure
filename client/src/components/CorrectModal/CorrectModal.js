import React from "react";

const CorrectModal = () =>
    <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Modal Title</h4>
            </div>

            <div className="modal-body">
            </div>

            <div className="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
;

export default CorrectModal;