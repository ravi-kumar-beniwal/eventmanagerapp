import React, { Component } from 'react'
import './Profile.css'
export default class Profile extends Component {
  render() {
    return (
      
        
        <div className="col-xl-8 col-lg-9">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" role="tabpanel" id="profile" aria-labelledby="profile-tab">
                                            <div className="media mb-4">
                                                <image alt="Image" src={"url(../images/ravi.jpg)"} className="avatar avatar-lg"/>
                                                <div className="media-body ml-3">
                                                    <div className="custom-file custom-file-naked d-block mb-1">
                                                        <input type="file" className="custom-file-input d-none" id="avatar-file"/ >
                                                        <label className="custom-file-label position-relative" for="avatar-file">
                                                            <span className="btn btn-primary">
                                                                Upload avatar
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <small>For best results, use an image at least 256px by 256px in either .jpg or .png format</small>
                                                </div>
                                            </div>
                                            
                                            <form>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-3">First Name</label>
                                                    <div className="col">
                                                        <input type="text" placeholder="First name" value="David" name="profile-first-name" className="form-control" required=""/>
                                                    </div>
                                                </div>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-3">Last Name</label>
                                                    <div className="col">
                                                        <input type="text" placeholder="First name" value="Whittaker" name="profile-last-name" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-3">Email</label>
                                                    <div className="col">
                                                        <input type="email" placeholder="Enter your email address" name="profile-email" className="form-control" required=""/>
                                                    </div>
                                                </div>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-3">Location</label>
                                                    <div className="col">
                                                        <input type="text" placeholder="Enter your location" name="profile-location" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-3">Bio</label>
                                                    <div className="col">
                                                        <textarea type="text" placeholder="Tell us a little about yourself" name="profile-bio" className="form-control" rows="4"></textarea>
                                                        <small>This will be displayed on your public profile</small>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-end">
                                                    <button type="submit" className="btn btn-primary">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" role="tabpanel" id="password" aria-labelledby="password-tab">
                                            <form>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-3">Current Password</label>
                                                    <div className="col">
                                                        <input type="password" placeholder="Enter your current password" name="password-current" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-3">New Password</label>
                                                    <div className="col">
                                                        <input type="password" placeholder="Enter a new password" name="password-new" className="form-control"/>
                                                        <small>Password must be at least 8 characters long</small>
                                                    </div>
                                                </div>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-3">Confirm Password</label>
                                                    <div className="col">
                                                        <input type="password" placeholder="Confirm your new password" name="password-new-confirm" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-end">
                                                    <button type="submit" className="btn btn-primary">Change Password</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" role="tabpanel" id="notifications" aria-labelledby="notifications-tab">
                                            <form>
                                                <h6>Activity Notifications</h6>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                                                        <input type="checkbox" className="custom-control-input" id="notify-1" checked=""/>
                                                        <label className="custom-control-label" for="notify-1">Someone assigns me to a task</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                                                        <input type="checkbox" className="custom-control-input" id="notify-2" checked=""/>
                                                        <label className="custom-control-label" for="notify-2">Someone mentions me in a conversation</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                                                        <input type="checkbox" className="custom-control-input" id="notify-3" checked=""/>
                                                        <label className="custom-control-label" for="notify-3">Someone adds me to a project</label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-md-4">
                                                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                                                        <input type="checkbox" className="custom-control-input" id="notify-4"/>
                                                        <label className="custom-control-label" for="notify-4">Activity on a project I am a member of</label>
                                                    </div>
                                                </div>
                                                <h6>Service Notifications</h6>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                                                        <input type="checkbox" className="custom-control-input" id="notify-5"/>
                                                        <label className="custom-control-label" for="notify-5">Monthly newsletter</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                                                        <input type="checkbox" className="custom-control-input" id="notify-6" checked=""/>
                                                        <label className="custom-control-label" for="notify-6">Major feature enhancements</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                                                        <input type="checkbox" className="custom-control-input" id="notify-7"/>
                                                        <label className="custom-control-label" for="notify-7">Minor updates and bug fixes</label>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-end">
                                                    <button type="submit" className="btn btn-primary">Save preferences</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" role="tabpanel" id="billing" aria-labelledby="billing-tab">
                                            <form>
                                                <h6>Plan Details</h6>
                                                <div className="card text-center">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="mb-4">
                                                                    <h6>Free</h6>
                                                                    <h5 className="display-4 d-block mb-2 font-weight-normal">$0</h5>
                                                                    <span className="text-muted text-small">Per User / Per Month</span>
                                                                </div>
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        Unlimited projects
                                                                    </li>
                                                                    <li>
                                                                        1 team
                                                                    </li>
                                                                    <li>
                                                                        4 team members
                                                                    </li>
                                                                </ul>
                                                                <div className="custom-control custom-radio d-inline-block">
                                                                    <input type="radio" id="plan-radio-1" name="customRadio" className="custom-control-input"/>
                                                                    <label className="custom-control-label" for="plan-radio-1"></label>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="mb-4">
                                                                    <h6>Pro</h6>
                                                                    <h5 className="display-4 d-block mb-2 font-weight-normal">$10</h5>
                                                                    <span className="text-muted text-small">Per User / Per Month</span>
                                                                </div>
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        Unlimited projects
                                                                    </li>
                                                                    <li>
                                                                        Unlmited teams
                                                                    </li>
                                                                    <li>
                                                                        Unlimited team members
                                                                    </li>
                                                                </ul>
                                                                <div className="custom-control custom-radio d-inline-block">
                                                                    <input type="radio" id="plan-radio-2" name="customRadio" className="custom-control-input" checked=""/>
                                                                    <label className="custom-control-label" for="plan-radio-2"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <form className="mt-4">
                                                <h6>Payment Method</h6>

                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="custom-control custom-radio d-inline-block">
                                                                    <input type="radio" id="method-radio-1" name="payment-method" className="custom-control-input" checked=""/>
                                                                    <label className="custom-control-label" for="method-radio-1"></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <image alt="Image" src="assets/img/logo-payment-visa.svg" className="avatar rounded-0"/>
                                                            </div>
                                                            <div className="col d-flex align-items-center">
                                                                <span>•••• •••• •••• 8372</span>
                                                                <small className="ml-2">Exp: 06/21</small>
                                                            </div>
                                                            <div className="col-auto">
                                                                <button className="btn btn-sm btn-danger">
                                                                    Remove Card
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="custom-control custom-radio d-inline-block">
                                                                    <input type="radio" id="method-radio-2" name="payment-method" className="custom-control-input"/>
                                                                    <label className="custom-control-label" for="method-radio-2"></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <image alt="Image" src="assets/img/logo-payment-amex.svg" className="avatar rounded-0"/>
                                                            </div>
                                                            <div className="col d-flex align-items-center">
                                                                <span>•••• •••• •••• 9918</span>
                                                                <small className="ml-2">Exp: 02/20</small>
                                                            </div>
                                                            <div className="col-auto">
                                                                <button className="btn btn-sm btn-danger">
                                                                    Remove Card
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="custom-control custom-radio d-inline-block">
                                                                    <input type="radio" id="method-radio-3" name="payment-method" className="custom-control-input"/>
                                                                    <label className="custom-control-label" for="method-radio-3"></label>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <image alt="Image" src="assets/img/logo-payment-paypal.svg" className="avatar rounded-0"/>
                                                            </div>
                                                            <div className="col d-flex align-items-center">
                                                                <span>david.whittaker@pipeline.io</span>

                                                            </div>
                                                            <div className="col-auto">
                                                                <button className="btn btn-sm btn-primary">
                                                                    Manage account
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                        <div className="tab-pane fade" role="tabpanel" id="integrations" aria-labelledby="integrations-tab">

                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="media align-items-center">
                                                                <image alt="Image" src="assets/img/logo-integration-slack.svg"/>
                                                                <div className="media-body ml-2">
                                                                    <span className="h6 mb-0 d-block">Slack</span>
                                                                    <span className="text-small text-muted">Permissions: Read, Write, Comment</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button className="btn btn-sm btn-danger">
                                                                Revoke
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="media align-items-center">
                                                                <image alt="Image" src="assets/img/logo-integration-dropbox.svg"/>
                                                                <div className="media-body ml-2">
                                                                    <span className="h6 mb-0 d-block">Dropbox</span>
                                                                    <span className="text-small text-muted">Permissions: Read, Write, Upload</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button className="btn btn-sm btn-danger">
                                                                Revoke
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="media align-items-center">
                                                                <image alt="Image" src="assets/img/logo-integration-drive.svg"/>
                                                                <div className="media-body ml-2">
                                                                    <span className="h6 mb-0 d-block">Google Drive</span>
                                                                    <span className="text-small text-muted">Permissions: Read, Write</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button className="btn btn-sm btn-danger">
                                                                Revoke
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="media align-items-center">
                                                                <image alt="Image" src="assets/img/logo-integration-trello.svg"/>
                                                                <div className="media-body ml-2">
                                                                    <span className="h6 mb-0 d-block">Trello</span>
                                                                    <span className="text-small text-muted">Permissions: Read, Write</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button className="btn btn-sm btn-danger">
                                                                Revoke
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


    

     
      
    )
  }
}
