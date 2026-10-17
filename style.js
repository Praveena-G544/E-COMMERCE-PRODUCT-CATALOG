@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');

:root {
    --cream: #f4f8ff;
    --pink: #dceaff;
    --rose: #3976c5;
    --dark: #172b4d;
    --muted: #64748b;
    --border: #dbe5f2;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--dark);
}

a {
    text-decoration: none;
    color: inherit;
}

header {
    padding: 20px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background: #fff;
    border-bottom: 1px solid var(--border);
}

.logo {
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -1.5px;
}

.logo span {
    color: var(--rose);
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    font-size: 13px;
    transition: color .2s;
}

nav a:hover {
    color: var(--rose);
}

.hero {
    padding: 60px 7%;
    background: linear-gradient(120deg, #e6f0ff, #d4e5ff);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.hero > div {
    flex: 1;
}

.eyebrow {
    color: var(--rose);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
}

.hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(38px, 5vw, 62px);
    font-weight: 500;
    line-height: 1.2;
    margin: 20px 0;
}

.hero h1 span {
    color: var(--rose);
    font-style: italic;
}

.hero p {
    color: var(--muted);
    font-size: 14px;
    line-height: 1.8;
    margin-bottom: 20px;
}

.hero img {
    width: 45%;
    height: 340px;
    object-fit: cover;
    border-radius: 150px 150px 5px 5px;
}

.button {
    display: inline-block;
    background: var(--dark);
    color: white;
    padding: 14px 22px;
    border-radius: 4px;
    font-size: 13px;
    transition: background .2s;
}

.button:hover {
    background: var(--rose);
}

.collection {
    padding: 65px 7%;
    background: #fff;
}

.collection h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(30px, 4vw, 42px);
    font-weight: 500;
    margin: 15px 0;
}

.collection > p {
    color: var(--muted);
    font-size: 13px;
}

.controls {
    margin: 30px 0;
}

#searchInput {
    display: block;
    width: 100%;
    max-width: 450px;
    padding: 14px 16px;
    border: 1px solid var(--border);
    border-radius: 5px;
    background: #f8fbff;
    font-family: inherit;
    font-size: 13px;
    outline: none;
}

#searchInput:focus {
    border-color: var(--rose);
    box-shadow: 0 0 0 3px #3976c51a;
}

.filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 18px;
}

.filter {
    padding: 10px 16px;
    border: 1px solid var(--border);
    border-radius: 25px;
    background: #f4f8ff;
    color: var(--dark);
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
    transition: all .2s;
}

.filter:hover,
.filter.active {
    background: var(--rose);
    border-color: var(--rose);
    color: white;
}

#productGrid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 28px 18px;
}

.card {
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 7px;
    background: white;
    transition: transform .25s, box-shadow .25s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px #172b4d12;
}

.card img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
    background: #e4efff;
}

.info {
    padding: 16px;
}

.info h3 {
    font-size: 14px;
    margin: 10px 0;
}

.info p {
    min-height: 32px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.6;
}

.bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 15px;
}

.price {
    color: var(--rose);
    font-size: 14px;
    font-weight: 700;
}

.tag {
    color: var(--muted);
    font-size: 9px;
    letter-spacing: .5px;
    text-transform: uppercase;
}

#noResults {
    padding: 35px;
    text-align: center;
    color: var(--muted);
}

#noResults[hidden] {
    display: none;
}

.about {
    padding: 70px 20px;
    background: #e6efff;
    text-align: center;
}

.about h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 5vw, 45px);
    font-weight: 500;
    margin: 18px 0;
}

.about p {
    max-width: 550px;
    margin: 15px auto;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.8;
}

footer {
    padding: 25px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    background: var(--cream);
}

footer p {
    color: var(--muted);
    font-size: 11px;
}

@media (max-width: 1000px) {
    #productGrid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .card img {
        height: 200px;
    }
}

@media (max-width: 700px) {
    header {
        padding: 18px 5%;
        flex-wrap: wrap;
    }

    nav {
        gap: 15px;
    }

    nav a {
        font-size: 12px;
    }

    .hero {
        padding: 40px 5%;
        flex-direction: column;
        align-items: stretch;
    }

    .hero img {
        width: 100%;
        height: 260px;
    }

    .collection {
        padding: 45px 5%;
    }

    #productGrid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px 12px;
    }

    .card img {
        height: 175px;
    }

    .info {
        padding: 11px;
    }

    .info h3 {
        font-size: 13px;
    }

    .about {
        padding: 50px 20px;
    }

    footer {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 380px) {
    nav {
        gap: 10px;
    }

    nav a {
        font-size: 11px;
    }

    .card img {
        height: 145px;
    }
}