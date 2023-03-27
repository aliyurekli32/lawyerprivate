import { css } from "@linaria/core";
import  {styled}  from "@linaria/react";





export const carouselA= css`
    margin: 0px auto 24px auto;

	text-align: center;
	color: #fff;
	
	
.carousel {
	@apply w-[600px] h-[600px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[300px] max-sm:h-[300px];
	
	overflow: hidden;
	text-align: center;
	position: relative;
	padding: 0;
	list-style: none;
}
.carousel__controls,
.carousel__activator {
	display: none;
}
.carousel__activator {
	&:nth-of-type(1):checked {
		& ~ .carousel__track {
			transform: translateX(0%);
		}
		& ~ .carousel__slide {
			&:nth-of-type(1) {
				transition: opacity 0.5s, transform 0.5s;
				top: 0;
				left: 0;
				right: 0;
				opacity: 1;
				transform: scale(1);
			}
		}
		& ~ .carousel__controls {
			&:nth-of-type(1) {
				display: block;
				opacity: 1;
			}
		}
		& ~ .carousel__indicators {
			.carousel__indicator {
				&:nth-of-type(1) {
					opacity: 1;
				}
			}
		}
	}
	&:nth-of-type(2):checked {
		& ~ .carousel__track {
			transform: translateX(-100%);
		}
		& ~ .carousel__slide {
			&:nth-of-type(2) {
				transition: opacity 0.5s, transform 0.5s;
				top: 0;
				left: 0;
				right: 0;
				opacity: 1;
				transform: scale(1);
			}
		}
		& ~ .carousel__controls {
			&:nth-of-type(2) {
				display: block;
				opacity: 1;
			}
		}
		& ~ .carousel__indicators {
			.carousel__indicator {
				&:nth-of-type(2) {
					opacity: 1;
				}
			}
		}
	}
	&:nth-of-type(3):checked {
		& ~ .carousel__track {
			transform: translateX(-200%);
		}
		& ~ .carousel__slide {
			&:nth-of-type(3) {
				transition: opacity 0.5s, transform 0.5s;
				top: 0;
				left: 0;
				right: 0;
				opacity: 1;
				transform: scale(1);
			}
		}
		& ~ .carousel__controls {
			&:nth-of-type(3) {
				display: block;
				opacity: 1;
			}
		}
		& ~ .carousel__indicators {
			.carousel__indicator {
				&:nth-of-type(3) {
					opacity: 1;
				}
			}
		}
	}
	&:nth-of-type(4):checked {
		& ~ .carousel__track {
			transform: translateX(-300%);
		}
		& ~ .carousel__slide {
			&:nth-of-type(4) {
				transition: opacity 0.5s, transform 0.5s;
				top: 0;
				left: 0;
				right: 0;
				opacity: 1;
				transform: scale(1);
			}
		}
		& ~ .carousel__controls {
			&:nth-of-type(4) {
				display: block;
				opacity: 1;
			}
		}
		& ~ .carousel__indicators {
			.carousel__indicator {
				&:nth-of-type(4) {
					opacity: 1;
				}
			}
		}
	}
	&:nth-of-type(5):checked {
		& ~ .carousel__track {
			transform: translateX(-400%);
		}
		& ~ .carousel__slide {
			&:nth-of-type(5) {
				transition: opacity 0.5s, transform 0.5s;
				top: 0;
				left: 0;
				right: 0;
				opacity: 1;
				transform: scale(1);
			}
		}
		& ~ .carousel__controls {
			&:nth-of-type(5) {
				display: block;
				opacity: 1;
			}
		}
		& ~ .carousel__indicators {
			.carousel__indicator {
				&:nth-of-type(5) {
					opacity: 1;
				}
			}
		}
	}
	&:nth-of-type(6):checked {
		& ~ .carousel__track {
			transform: translateX(-400%);
		}
		& ~ .carousel__slide {
			&:nth-of-type(6) {
				transition: opacity 0.5s, transform 0.5s;
				top: 0;
				left: 0;
				right: 0;
				opacity: 1;
				transform: scale(1);
			}
		}
		& ~ .carousel__controls {
			&:nth-of-type(6) {
				display: block;
				opacity: 1;
			}
		}
		& ~ .carousel__indicators {
			.carousel__indicator {
				&:nth-of-type(6) {
					opacity: 1;
				}
			}
		}
	}
	&:nth-of-type(7):checked {
		& ~ .carousel__track {
			transform: translateX(-400%);
		}
		& ~ .carousel__slide {
			&:nth-of-type(7) {
				transition: opacity 0.5s, transform 0.5s;
				top: 0;
				left: 0;
				right: 0;
				opacity: 1;
				transform: scale(1);
			}
		}
		& ~ .carousel__controls {
			&:nth-of-type(7) {
				display: block;
				opacity: 1;
			}
		}
		& ~ .carousel__indicators {
			.carousel__indicator {
				&:nth-of-type(7) {
					opacity: 1;
				}
			}
		}
	}
	&:nth-of-type(8):checked {
		& ~ .carousel__track {
			transform: translateX(-400%);
		}
		& ~ .carousel__slide {
			&:nth-of-type(8) {
				transition: opacity 0.5s, transform 0.5s;
				top: 0;
				left: 0;
				right: 0;
				opacity: 1;
				transform: scale(1);
			}
		}
		& ~ .carousel__controls {
			&:nth-of-type(8) {
				display: block;
				opacity: 1;
			}
		}
		& ~ .carousel__indicators {
			.carousel__indicator {
				&:nth-of-type(8) {
					opacity: 1;
				}
			}
		}
	}
}
.carousel__control {
	height: 30px;
	width: 30px;
	margin-top: -15px;
	top: 50%;
	position: absolute;
	display: block;
	cursor: pointer;
	border-width: 5px 5px 0 0;
	border-style: solid;
	border-color: #fafafa;
	opacity: 0.35;
	outline: 0;
	z-index: 3;
	&:hover {
		opacity: 1;
	}
}
.carousel__control--backward {
	left: 10px;
	transform: rotate(-135deg);
}
.carousel__control--forward {
	right: 10px;
	transform: rotate(45deg);
}
.carousel__indicators {
	position: absolute;
	bottom: 20px;
	width: 100%;
	text-align: center;
}
.carousel__indicator {
	height: 15px;
	width: 15px;
	border-radius: 100%;
	display: inline-block;
	z-index: 2;
	cursor: pointer;
	opacity: 0.35;
	margin: 0 2.5px 0 2.5px;
	background-color: #fafafa;
	&:hover {
		opacity: 0.75;
	}
}
.carousel__track {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 0;
	margin: 0;
	transition: transform 0.5s ease 0s;
	.carousel__slide {
		display: block;
		top: 0;
		left: 0;
		right: 0;
		opacity: 1;
		&:nth-of-type(1) {
			transform: translateX(0%);
		}
		&:nth-of-type(2) {
			transform: translateX(100%);
		}
		&:nth-of-type(3) {
			transform: translateX(200%);
		}
		&:nth-of-type(4) {
			transform: translateX(300%);
		}
		&:nth-of-type(5) {
			transform: translateX(400%);
		}
		&:nth-of-type(6) {
			transform: translateX(500%);
		}
		&:nth-of-type(7) {
			transform: translateX(600%);
		}
		&:nth-of-type(8) {
			transform: translateX(700%);
		}
	}
}
.carousel--scale {
	.carousel__slide {
		transform: scale(0);
	}
}
.carousel__slide {

	height: 100%;
	position: absolute;
	overflow-y: auto;
	opacity: 0;
	overflow: hidden;
	filter: grayscale(1);
	&:hover{
		filter: grayscale(0);
	}
}


	


.carousel-container {
	display: inline-block;
}
.my-carousel {
	border-radius: 5px;
	margin: 30px;
}
.carousel--thumb {
	.carousel__indicator {
		height: 30px;
		width: 30px;
		&:hover .carousel__slide{
		filter: grayscale(0);
	}
	}
	&:hover .carousel__slide{
		filter: grayscale(0);
	}
}
h1 {
	font-size: 50px;
	line-height: 50px;
	color: #fafafa;
	position: absolute;
	top: 50%;
	width: 100%;
	text-align: center;
	margin-top: -25px;
}
h2,
h3 {
	color: #fafafa;
}
h3 {
	font-size: 50px;
}
.carousel__slide:nth-of-type(1),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(1) {
	background-image: url("https://unsplash.it/300?random");
	background-size: cover;
	background-position: center;
}
.carousel__slide:nth-of-type(2),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(2) {
	background-image: url("https://unsplash.it/600?random");
	background-size: cover;
	background-position: center;
}
.carousel__slide:nth-of-type(3),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(3) {
	background-image: url("https://unsplash.it/900?random");
	background-size: cover;
	background-position: center;
}
.carousel__slide:nth-of-type(4),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(4) {
	background-image: url("https://unsplash.it/1200?random");
	background-size: cover;
	background-position: center;
}
.carousel__slide:nth-of-type(5),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(5) {
	background-image: url("https://unsplash.it/1500?random");
	background-size: cover;
	background-position: center;
}
.carousel__slide:nth-of-type(6),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(6) {
	background-image: url("https://unsplash.it/100?random");
	background-size: cover;
	background-position: center;
}
.carousel__slide:nth-of-type(7),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(7) {
	background-image: url("https://unsplash.it/400?random");
	background-size: cover;
	background-position: center;
}
.carousel__slide:nth-of-type(8),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(8) {
	background-image: url("https://unsplash.it/700?random");
	background-size: cover;
	background-position: center;
}


`;

export const comments= css`
.pic-ctn {
  width: 90vw;
  height: 200px;
}
@keyframes nox {
	0% {
    transform: translateX(0px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(0px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 0;
  }
}

@keyframes display {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0;
  }
}

.pic-ctn {
  position: relative;
  width: 90vw;
  height: 300px;
  margin-top: 15vh;
}
@media screen and (max-width: 600px) {
	.pic-ctn > .img1 {
  position: absolute;
  top: 0;
  left: calc(50%);
  opacity: 0;
  animation: nox 50s infinite !important;
}
}

.pic-ctn > .img1 {
  position: absolute;
  top: 0;
  left: calc(50% - 200px);
  opacity: 0;
  animation: display 50s infinite;
}

.img1:nth-child(2) {
  animation-delay: 10s;
}
.img1:nth-child(3) {
  animation-delay: 20s;
}
.img1:nth-child(4) {
  animation-delay: 30s;
}
.img1:nth-child(5) {
  animation-delay: 40s;
}
`














// export const containerX = css`
// position: relative;
// height: 100%;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   font-size: 3vmin;
// background: #151515;
//   color: #fff;
//   overflow: hidden;
//  display: flex;
//   justify-content: center;
//   align-items: center;

// .slides {
//     position: relative;
//   display: grid;
//   > .slide {
//     grid-area: 1 / -1;
//   }

//   > button {
//     appearance: none;
//     background: transparent;
//     border: none;
//     color: white;
//     position: absolute;
//     font-size: 5rem;
//     width: 5rem;
//     height: 5rem;
//     top: 30%;
//     transition: opacity 0.3s;
//     opacity: 0.7;
//     z-index: 5;

//     &:hover {
//       opacity: 1;
//     }

//     &:focus {
//       outline: none;
//     }

//     &:first-child {
//       left: -50%;
//     }
//     &:last-child {
//       right: -50%;
//     }
//   }
// }

// .slide {
//   //transform-style: preserve-3d;
//   // border: solid 1px red;

//   // &[data-active] {
//   //   .slideContent > * {
//   //     transform: none;
//   //     opacity: 1;
//   //   }
//   // }
// }

// .slideContent {
//   width: 30vw;
//   height: 40vw;
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   transition: transform 0.5s ease-in-out;
//   opacity: 0.7;

//   display: grid;
//   align-content: center;

//   transform-style: preserve-3d;
//   transform: perspective(1000px) translateX(calc(100% * var(--offset)))
//     rotateY(calc(-45deg * var(--dir)));
// }

// .slideContentInner {
//   transform-style: preserve-3d;
//   transform: translateZ(2rem);
//   transition: opacity 0.3s linear;
//   text-shadow: 0 0.1rem 1rem #000;
//   opacity: 0;

//   .slideSubtitle,
//   .slideTitle {
//     font-size: 2rem;
//     font-weight: normal;
//     letter-spacing: 0.2ch;
//     text-transform: uppercase;
//     margin: 0;
//   }

//   .slideSubtitle::before {
//     content: "— ";
//   }

//   .slideDescription {
//     margin: 0;
//     font-size: 0.8rem;
//     letter-spacing: 0.2ch;
//   }
// }

// .slideBackground {
//   position: fixed;
//   top: 0;
//   left: -10%;
//   right: -10%;
//   bottom: 0;
//   background-size: cover;
//   background-position: center center;
//   z-index: -1;
//   opacity: 0;
//   transition: opacity 0.3s linear, transform 0.3s ease-in-out;
//   pointer-events: none;

//   transform: translateX(calc(10% * var(--dir)));
// }

// .slide[data-active] {
//   z-index: 2;
//   pointer-events: auto;

//   .slideBackground {
//     opacity: 0.2;
//     transform: none;
//   }

//   .slideContentInner {
//     opacity: 1;
//   }

//   .slideContent {
//     --x: calc(var(--px) - 0.5);
//     --y: calc(var(--py) - 0.5);
//     opacity: 1;

//     transform: perspective(1000px);

//     &:hover {
//       transition: none;
//       transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))
//         rotateX(calc(var(--y) * -45deg));
//     }
//   }
// }
// `;
