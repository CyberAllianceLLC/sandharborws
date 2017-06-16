<template>
  <div class="contact">
    <div class="alert title">
      <span class="pull-left"><i class="fa fa-lg fa-anchor"></i></span>
      <h4>Contact us</h4>
    </div>
    <div class="body">
      <div class="row">
        <div class="col-md-6">

        </div>
        <div class="col-md-6">
          <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
          <br/>
          <p class="about">
            <i class="fa fa-map-marker"></i>
            Address
          </p>
          <p class="about">
            <i class="fa fa-phone"></i>
            Phone number
          </p>
          <p class="about">
            <i class="fa fa-envelope"></i>
            Email
          </p>
          <p class="about">
            <i class="fa fa-facebook-official"></i>
            Facebook
          </p>
        </div>
      </div>
    </div>
    <br/>
    <div class="alert title">
      <span class="pull-left"><i class="fa fa-lg fa-anchor"></i></span>
      <h4>About Us</h4>
    </div>
    <div class="body">
      <p class="mission">
        Sand Harbor Water Sports takes pride in delivering and creating a safe and memorable aquatic experience on Lake
        Tahoe's majestic waters.
        <br/>
        <br/>
        The owner/operator is a licensed Coast Guard Captain as well as a <strong>Sea Doo Technician</strong> with 23 years of experience
        renting in a responsible and ecological manner. We are open May 1st through October 1st of each year.
        <br/>
        <br/>
        Lake Tahoe, one of the most visited destinations, offers an abundance of aquatic fun. Sand Harbor’s personal
        watercraft rentals are the perfect source to explore Tahoe’s hidden coves and take in the spectacular views.
        As you ride our <strong>Sea Doo’s (Jet Skis)</strong> onto Lake Tahoe's crystal clear waters, what you once thought to be
        spectacular turns into the experience of a lifetime.
      </p>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .contact {
    .title {
      background-color: #303300;
      border-color: #303300;
      color: #FFF200;
      h4 {
        padding: 0 30px;
        margin: 0;
      }
    }
    .body {
      i {
        margin-right: 10px;
      }
      .about {}
      .mission {
        font-size: 16px;
      }
    }
  }
</style>