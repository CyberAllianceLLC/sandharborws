<template>
  <div class="rentals description">
    <!-- rentals -->
    <h3 id="rentals">
      <i class="fa fa-anchor"></i>
      Rentals
    </h3>
    <hr/>

    <!-- Book online button -->
    <a href="https://booking.bookinghound.com/rezfe/book?og=f74b4e0a-a7e5-4ec2-95f5-5588152f35fe&mode=al" type="button" class="btn btn-primary btn-lg btn-block">
      <i class="fa fa-shopping-cart"></i> Click Here to Book Online
    </a>

    <img :src="'/imgs/year/'+ new Date().getFullYear() +'.png'" width="100%"/>
    <img src="/imgs/sandharborws_Rentals.png" width="100%"/>

    <!-- Book online button -->
    <a href="https://booking.bookinghound.com/rezfe/book?og=f74b4e0a-a7e5-4ec2-95f5-5588152f35fe&mode=al" type="button" class="btn btn-primary btn-lg btn-block">
      <i class="fa fa-shopping-cart"></i> Click Here to Book Online
    </a>
    <br/>

    <!-- disclaimer -->
    <ul>
      <li>Jet Skis available for Immediate Pick up.</li>
      <li>Ideal for all ages. You must be 18 years old to drive and 21 years old to carry passengers under the age of 18.</li>
      <li>Prices Include: Gas, Life vests and Taxes.</li>
      <li><router-link to="/disclaimer">Disclaimer</router-link></li>
    </ul>

    <!-- Explore lake Tahoe -->
    <h3 id="explore">
      <i class="fa fa-compass"></i>
      Explore Lake Tahoe
    </h3>
    <hr/>
    <p>
      <strong>You want more, this is the place!</strong>
      Sand Harbor Watersports offers the ability to see all <strong>Lake Tahoe</strong> has to offer.
      You don’t have to stay in a Confined Riding Area.
      <strong>Cruise the pristine shoreline</strong> or head out to Emerald Bay.
      Fast or slow, enjoy the ride!
    </p>
    <img src="/imgs/sandharborws_yourTermsTahoe.png" width="100%"/>

    <!-- Book online button -->
    <a href="https://booking.bookinghound.com/rezfe/book?og=f74b4e0a-a7e5-4ec2-95f5-5588152f35fe&mode=al" type="button" class="btn btn-primary btn-lg btn-block">
      <i class="fa fa-shopping-cart"></i> Click Here to Book Online
    </a>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .rentals {
    ul {
      font-size: 16px;
    }
  }
</style>