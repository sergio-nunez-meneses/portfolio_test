<?php include 'include/header.php'; ?>

<div class="nav-toggle">
	<div class="nav-toggle-bar"></div>
</div>

<nav id="nav" class="nav">
	<ul>
		<li><a class="nav-item active-item" href="#slide1">home</a></li>
		<li><a class="nav-item" href="#slide2">about</a></li>
		<li><a class="nav-item" href="#slide3">interests</a></li>
		<li><a class="nav-item" href="#slide4">portfolio</a></li>
		<li><a class="nav-item" href="#slide5">contact</a></li>
	</ul>
</nav>

<main id="my-keen-slider" class="keen-slider">
  <article id="slide1" class="keen-slider__slide number-slide1">
    <a href="" class="typewrite" data-period="2000" data-type='[ "hi, i am sergio." ]'>
      <span class="wrap"></span>
    </a>
  </article>

  <article id="slide2" class="keen-slider__slide number-slide2">
      <a href="" class="typewrite" data-period="2000" data-type='[ "i am a composer." ]'>
        <span class="wrap"></span>
      </a>
  </article>

  <article id="slide3" class="keen-slider__slide number-slide3">
    <a href="" class="typewrite" data-period="2000" data-type='[ "i love computer music design, web development, cooking and go hiking!" ]'>
      <span class="wrap"></span>
    </a>
  </article>

  <!-- portfolio gallery -->
  <article id="slide4" class="keen-slider__slide number-slide4">

    <div class="wrapper">
      <div class="media">
        <div class="layer">
          <p>+ variable-step drum machine</p>
        </div>
        <img src="img/Capture d’écran 2019-10-20 à 20.33.27.png" alt="" />
      </div>
      <div class="media">
        <div class="layer">
          <p>+ seek and destroy!</p>
        </div>
        <img src="img/seek.and.destroy.png" alt="" />
      </div>
      <div class="media">
        <div class="layer">
          <p>+ cataRT 2 orchidea</p>
        </div>
        <img src="img/catart2orchidea.png" alt="" />
      </div>
      <div class="media">
        <div class="layer">
          <p>+ mubuMarkers 2 bachMarkers</p>
        </div>
        <img src="img/mubumarkers2bachmarkers.png" alt="" />
      </div>
    </div>

  </article>

  <article id="slide5" class="keen-slider__slide number-slide5">contact</article>

</main>

<?php include 'include/footer.php'; ?>
