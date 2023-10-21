import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg d-none d-lg-block">
      <div class="collapse navbar-collapse d-flex justify-content-end">
        <ul class="navbar-nav d-flex">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Works
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Service
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
