DROP TABLE IF EXISTS inventory;

CREATE table inventory (
    item_id SERIAL PRIMARY KEY,
    img_url VARCHAR,
    name_item VARCHAR,
    price_item INTEGER
);



INSERT INTO inventory (name_item, price_item, img_url)
VALUES ('Nintendo Switch',  299, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  200, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  254, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  235, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  2935, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  234, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  2245, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  4534, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  5234, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  345, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg'),
('Nintendo Switch',  246, 'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/bundle_color_console%20(3).jpg');

SELECT * FROM inventory;

-- dummy data