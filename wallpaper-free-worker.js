addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const html = `
  <!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link rel="icon" href="https://i.imgur.com/XhlhGxc.png" type="image/png">
    <title>手機壁紙網站 - WallPaper</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

    <style>
        :root {
            --primary-color: #05a081;
            --secondary-color: #f5f5f5;
            --text-color: #333;
        }
        body { 
            font-family: 'Roboto', sans-serif; 
            margin: 0; 
            padding: 0; 
            background-color: white;
            color: var(--text-color);
        }
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #ff731b;
        }
        .nav-links {
            display: flex;
            gap: 1rem;
        }
        .nav-links a {
            color: var(--text-color);
            text-decoration: none;
        }
        .search-bar {
            flex-grow: 1;
            margin: 0 2rem;
        }
        .search-bar input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .join-button {
            background-color: #2481cc;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
        }
        .category-tags {
            display: flex;
            gap: 1rem;
            padding: 1rem 2rem;
            overflow-x: auto;
            white-space: nowrap;
        }
        .category-tag {
            background-color: #f0f0f0;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            cursor: pointer;
        }
        h1 {
            font-size: 2.5rem;
            text-align: center;
            margin: 2rem 0;
        }
        .stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        .stat {
            font-size: 0.9rem;
        }
        .stat strong {
            font-size: 1.1rem;
        }
        .gallery { 
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
            padding: 1rem 2rem;
        }
        .image-container { 
            position: relative;
            overflow: hidden;
            border-radius: 8px;
        }
        .image-container img { 
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        .image-container:hover img {
            transform: scale(1.05);
        }
        .pagination { 
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2rem 0;
        }
        .pagination button { 
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .pagination button:hover {
            background-color: #048f72;
        }
        .pagination button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        #pageInfo {
            margin: 0 1rem;
        }
        .popup {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            z-index: 1000;
        }
        .popup-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            max-width: 90%;
            max-height: 90%;
            min-width: 80%;
        }
        .popup-image {
            flex: 1;
            max-width: 60%;
            object-fit: contain;
        }
        .popup-info {
            flex: 1;
            padding-left: 20px;
        }
        .close-popup {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 35px;
            cursor: pointer;
            color: black;
        }
        .download-button {
            background-color: #ff5bb4;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
            margin-top: 20px;
        }
        
        .download-button:hover {
            background-color: #2481cc;
        }
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                align-items: flex-start;
            }
            .search-bar {
                width: 100%;
                margin: 1rem 0;
            }
            .nav-links {
                flex-direction: column;
                width: 100%;
            }
            .gallery {
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: white;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .nav-links.show {
                display: flex;
                flex-direction: column;
            }
            .category-tags {
                display: none;
            }
            .menu-icon {
                display: block;
                font-size: 24px;
                cursor: pointer;
            }
        }
        .menu-icon {
            display: none;
        }
        .bottom {
            background-color: #f5f5f5;
            padding: 20px;
            text-align: center;
            margin-top: 40px;
        }
        .social-icons {
            margin-top: 10px;
        }
        .social-icons a {
            color: #333;
            font-size: 24px;
            margin: 0 10px;
            text-decoration: none;
        }

    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo-container" onclick="window.location.href='/'" style="cursor: pointer; display: flex; align-items: center;">
            <img src="https://i.imgur.com/XhlhGxc.png" alt="Logo" class="logo-image" style="width: 50px; height: 50px; margin-right: 10px;">
            <div class="logo">WallPaper</div>
        </div>

        <div class="search-bar">
            <input type="text" placeholder="搜索高清壁紙...">
        </div>
        <div class="menu-icon" onclick="toggleMenu()">☰</div>
        <div class="nav-links">
            <button class="join-button" onclick="window.open('https://t.me/kkkkkcat', '_blank');">加入Telegram</button>
        </div>
    </nav>

    <h1>HD壁紙</h1>
    
    <div class="stats">
        <span class="stat"><strong>81.7K</strong> 圖片</span>
        <span class="stat"><strong>2.6K</strong> 影片</span>
        <span class="stat"><strong>6.8K</strong> 用戶</span>
    </div>

    <main>
        <div class="gallery" id="gallery"></div>
        <div class="pagination">
            <button id="prevPage">上一頁</button>
            <span id="pageInfo"><span id="currentPage">1</span> / <span id="totalPages">1</span></span>
            <button id="nextPage">下一頁</button>
        </div>
    </main>

    <div id="popup" class="popup">
        <div class="popup-content">
            <span class="close-popup" onclick="closePopup()">&times;</span>
            <img id="popupImage" class="popup-image" src="" alt="壁紙">
            <div class="popup-info">
                <p><i class="fas fa-image"></i> 壁紙詳情</p>
                <p><i class="fas fa-id-card"></i> <span id="popupId"></span></p>
                <p><i class="fas fa-info-circle"></i> <span id="popupDescription"></span></p>
                <button id="downloadButton" class="download-button">
                    <i class="fas fa-download"></i> 下載圖片
                </button>
            </div>
        </div>
    </div>


    <footer class="bottom">
        <p>© 2024 WallPaper. All rights reserved.</p>
        <div class="social-icons">
            <a href="https://t.me/kkkkkcat" target="_blank"><i class="fab fa-telegram"></i></a>
            <a href="https://x.com/kcat88888" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fa-brands fa-threads"></i></a>

        </div>
    </footer>

    <script>
        let currentPage = 1;
        let imagesPerPage = 8;
        let allImages = [
            ["1", "101", "https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg", "Thunderstorm, Wallpaper, 4k wallpaper 1920x1080 image."],
            ["2", "102", "https://cdn.pixabay.com/photo/2023/12/15/03/11/basket-to-the-sea-8449952_1280.jpg", "basket to the sea"],
            ["3", "103", "https://cdn.pixabay.com/photo/2024/04/29/12/18/nature-8727795_1280.jpg", "Nature, Lock screen wallpaper, Wave image."],
            ["4", "104", "https://cdn.pixabay.com/photo/2019/06/22/18/30/woman-4292200_1280.jpg", "Woman, Man, Couple image."],
            ["5", "105", "https://cdn.pixabay.com/photo/2019/06/11/10/57/woman-4266713_1280.jpg", "Woman, Model, Portrait image."],
            ["6", "106", "https://cdn.pixabay.com/photo/2023/07/27/13/37/cottage-8153413_1280.jpg", "Cottage, Iceland, Rural image."],
            ["7", "107", "https://cdn.pixabay.com/photo/2024/03/11/12/43/leaf-8626541_1280.jpg", "Leaf, Nature, Autumn image."],
            ["8", "108", "https://cdn.pixabay.com/photo/2014/09/21/14/39/surface-455124_1280.jpg", "Surface, Rain, Desktop backgrounds image."],
            ["9", "109", "https://cdn.pixabay.com/photo/2021/03/16/13/47/lake-6099842_1280.jpg", "Lake, Boat, Night image. "],
            ["10", "110", "https://cdn.pixabay.com/photo/2024/03/15/18/53/magnolia-flower-8635583_1280.jpg", "Magnolia flower, Blossom, Flower image."],
        ];

        function updateGallery() {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';
            const startIndex = (currentPage - 1) * imagesPerPage;
            const endIndex = startIndex + imagesPerPage;
            const pageImages = allImages.slice(startIndex, endIndex);

            pageImages.forEach(image => {
                const container = document.createElement('div');
                container.className = 'image-container';
                const img = document.createElement('img');
                img.src = image[2];
                img.alt = image[3] || '壁紙';
                img.onclick = () => openPopup(image);
                const description = document.createElement('div');
                description.className = 'description';
                description.textContent = image[3] || '';
                container.appendChild(img);
                container.appendChild(description);
                gallery.appendChild(container);
            });
        }

        function updatePagination() {
            const totalPages = Math.ceil(allImages.length / imagesPerPage);
            document.getElementById('currentPage').textContent = currentPage;
            document.getElementById('totalPages').textContent = totalPages;
            document.getElementById('prevPage').disabled = currentPage === 1;
            document.getElementById('nextPage').disabled = currentPage === totalPages;
        }

        document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updateGallery();
                updatePagination();
            }
        });

        document.getElementById('nextPage').addEventListener('click', () => {
            const totalPages = Math.ceil(allImages.length / imagesPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                updateGallery();
                updatePagination();
            }
        });

        function openPopup(image) {
            const popup = document.getElementById('popup');
            const popupImage = document.getElementById('popupImage');
            const popupId = document.getElementById('popupId');
            const popupDescription = document.getElementById('popupDescription');
            const downloadButton = document.getElementById('downloadButton');

            popupImage.src = image[2];
            popupId.textContent = '圖片ID: ' + image[0];

            popupDescription.textContent = image[3] || '無描述';
            downloadButton.onclick = function() { 
              downloadImage(image[2], 'wallpaper_' + image[0] + '.jpg');
          };
            popup.style.display = 'block';
        }

        function closePopup() {
            document.getElementById('popup').style.display = 'none';
        }

        function downloadImage(url, filename) {
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = filename;
                    link.click();
                    URL.revokeObjectURL(link.href);
                })
                .catch(console.error);
        }

        updateGallery();
        updatePagination();

        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('show');
        }
    </script>
</body>
</html>
`;

  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}
