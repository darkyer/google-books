import React from "react";

function Nav() {
  return (
//     <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
//     <a className="navbar-brand" href="/">
//         <h2 className="text-white">Google Book Search</h2>
//     </a>
//     <div id="navbarNav">
//         <ul className="navbar-nav">
//             <li className="nav-item" id="home">
//                 <a className="nav-link text-white" href="/">Search Books</a>
//             </li>
//             <li className="nav-item" id="report">
//                 <a className="nav-link text-white" href="/saved">Saved Books</a>
//             </li>
//         </ul>
//     </div>
// </nav>

<nav class="navbar navbar-expand-lg navbar-primary bg-primary text-white" id="mainNav">
<div class="container">
  <a class="navbar-brand js-scroll-trigger text-white" href="/"><h2 className="text-white">Google Book Search</h2></a>
  <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
  <i class="fas fa-bars"></i>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item mx-0 mx-lg-1">
        <a class="nav-link py-3 px-0 px-lg-3 text-white" href="/">Search Books</a>
      </li>
      <li class="nav-item mx-0 mx-lg-1">
        <a class="nav-link py-3 px-0 px-lg-3 text-white" href="/saved">Saved Books</a>
      </li>
    </ul>
  </div>
</div>
</nav>
  );
}

export default Nav;
