jQuery(document).ready(function() {
    console.log('FORM is ready');

    let itemCount = 1;
    const styleOptions = {
		"5000": {
			colors: [
				'Antique Irish Green', 'Antique Jade Dome', 'Antique Orange', 'Antique Sapphire',
				'Antique Cherry Red', 'Ash Grey', 'Azalea', 'Berry', 'Black', 'Blackberry',
				'Brown Savana', 'Cardinal Red', 'Carolina Blue', 'Charcoal', 'Cobalt',
				'Coral Silk', 'Cornsilk', 'Daisy', 'Dark Chocolate', 'Dark Heather',
				'Electric Green', 'Forest Green', 'Garnet', 'Gold', 'Graphite Heather',
				'Gravel', 'Heather Navy', 'Heather Red', 'Heather Sapphire', 'Heliconia',
				'Heather Radiant Orchid', 'Ice Grey', 'Indigo Blue', 'Irish Green', 'Kiwi',
				'Light Blue', 'Light Pink', 'Lilac', 'Lime', 'Maroon', 'Midnight',
				'Military Green', 'Mint Green', 'Natural', 'Navy', 'Neon Blue', 'Neon Green',
				'Old Gold', 'Orange', 'Prairie Dust', 'Purple', 'Red', 'Royal', 'Russet',
				'Safety Green', 'Safety Pink', 'Sand', 'Sapphire', 'Sky', 'Sport Grey',
				'Sunset', 'Tangerine', 'Tennessee Orange', 'Texas Orange', 'Tropical Blue',
				'Turf Green', 'Tweed', 'Violet', 'White', 'Yellow Haze'
			],
			sizes: ['adult', 'youth']
		},
		"8000": {
			colors: [
				'Ash Grey', 'Azalea', 'Black', 'Carolina Blue', 'Daisy', 'Dark Heather',
				'Electric Green', 'Forest Green', 'Gold', 'Graphite Heather', 'Gravel',
				'Heliconia', 'Hot Sport Dark Navy', 'Heather Sport Scarlet Red',
				'Heather Sport Royal', 'Irish Green', 'Jade Dome', 'Kelly Green',
				'Light Blue', 'Light Pink', 'Lime', 'Maroon', 'Navy', 'Orange', 'Orchid',
				'Purple', 'Red', 'Royal', 'Safety Green', 'Sand', 'Sapphire',
				'Sport Dark Green', 'Sport Dark Navy', 'Sport Grey', 'Sport Royal',
				'Sport Scarlet Red', 'Sport Dark Maroon', 'Tennessee Orange', 'Texas Orange',
				'White'
			],
			sizes: ['adult', 'youth']
		},
		"64000": {
			colors: [
				'Antique Cherry Red', 'Antique Heliconia', 'Antique Sapphire', 'Azalea',
				'Black', 'Blackberry', 'Cardinal Red', 'Carolina Blue', 'Charcoal',
				'Cherry Red', 'Coral Silk', 'Cornsilk', 'Daisy', 'Dark Chocolate',
				'Dark Heather', 'Forest Green', 'Gold', 'Graphite Heather', 'Heather Berry',
				'Heather Cardinal', 'Heather Dark Grey', 'Heather Indigo', 'Heather Maroon',
				'Heather Navy', 'Heather Orange', 'Heather Purple', 'Heather Red',
				'Heather Royal', 'Heather Sapphire', 'Heliconia', 'Heather Military Green',
				'Heather Radiant Orchid', 'Heather Irish Green', 'Heather Galapagos Blue',
				'Ice Grey', 'Indigo Blue', 'Iris', 'Irish Green', 'Jade Dome', 'Kelly Green',
				'Kiwi', 'Light Blue', 'Light Pink', 'Lime', 'Maroon', 'Metro Blue',
				'Military Green', 'Mint Green', 'Natural', 'Navy', 'Orange', 'Paragon',
				'Pistachio', 'Purple', 'Red', 'Royal', 'Sapphire', 'Sky', 'Stone Blue',
				'Tropical Blue', 'White', 'RS Sport Grey', 'Sage', 'Sand'
			],
			sizes: ['adult', 'youth']
		},
		"5400": {
			colors: [
				'Ash Grey', 'Black', 'Cardinal Red', 'Carolina Blue', 'Charcoal',
				'Dark Heather', 'Forest Green', 'Garnet', 'Gold', 'Graphite Heather',
				'Indigo Blue', 'Irish Green', 'Light Blue', 'Light Pink', 'Maroon',
				'Military Green', 'Navy', 'Orange', 'Purple', 'Red', 'Royal', 'S Orange',
				'Safety Green', 'Sport Grey', 'White'
			],
			sizes: ['adult', 'youth']
		},
		"18000": {
			colors: [
				'Antique Cherry Red', 'Ash', 'Black', 'Cardinal Red', 'Carolina Blue',
				'Charcoal', 'Cherry Red', 'Dark Chocolate', 'Dark Heather', 'Forest Green',
				'Garnet', 'Gold', 'Graphite Heather', 'Heliconia', 'Hot Sport Dark Navy',
				'Heather Sport Dark Green', 'Heather Sport Scarlet Red', 'Heather Sport Royal',
				'Indigo Blue', 'Irish Green', 'Light Blue', 'Light Pink', 'Maroon',
				'Military Green', 'Navy', 'Orange', 'Purple', 'Red', 'Royal', 'S Orange',
				'Safety Green', 'Safety Pink', 'Sand', 'Sapphire', 'Sport Grey', 'White'
			],
			sizes: ['adult' , 'youth']
		},
		"18500": {
			colors: [
				'Antique Cherry Red', 'Ash', 'Black', 'Cardinal Red', 'Carolina Blue',
				'Charcoal', 'Cherry Red', 'Dark Chocolate', 'Dark Heather', 'Forest Green',
				'Garnet', 'Gold', 'Graphite Heather', 'Heliconia', 'Hot Sport Dark Navy',
				'Heather Sport Dark Green', 'Heather Sport Scarlet Red', 'Heather Sport Royal',
				'Indigo Blue', 'Irish Green', 'Light Blue', 'Light Pink', 'Maroon',
				'Military Green', 'Navy', 'Orange', 'Purple', 'Red', 'Royal', 'S Orange',
				'Safety Green', 'Safety Pink', 'Sand', 'Sapphire', 'Sport Grey', 'White'
			],
			sizes: ['adult', 'youth']
		},
		"18600": {
			colors: [
				'Ash', 'Black', 'Cardinal Red', 'Carolina Blue', 'Dark Chocolate',
				'Dark Heather', 'Forest Green', 'Graphite Heather', 'Irish Green',
				'Maroon', 'Navy', 'Purple', 'Red', 'Royal', 'Safety Green',
				'Sport Grey', 'S Orange', 'White'
			],
			sizes: ['adult', 'youth']
		},
		"8800": {
			colors: [
				'Ash Grey', 'Black', 'Carolina Blue', 'Dark Heather', 'Forest Green',
				'Gold', 'Graphite Heather', 'Kelly Green', 'Light Blue', 'Maroon',
				'Navy', 'Orange', 'Purple', 'Red', 'Royal', 'Sand', 'Sapphire',
				'Sport Grey', 'White'
			],
			sizes: ['adult', 'youth']
		},
		"3931": {
			colors: [
				'Admiral Blue', 'Aquatic Blue', 'Ash', 'Athletic Heather', 'Azalea',
				'Black', 'Black Heather', 'Blush Pink', 'Burnt Orange', 'Cardinal',
				'Carolina Heather', 'Charcoal Grey', 'Chocolate', 'Classic Pink',
				'Clover', 'Columbia Blue', 'Cool Mint', 'Crimson', 'Cyber Pink',
				'Deep Purple', 'Denim', 'Fiery Red', 'Fiery Red Heather', 'Forest Green',
				'Gold', 'Graphite Heather', 'Heather Mauve', 'J Navy', 'Kelly', 'Khaki',
				'Kiwi', 'Light Blue', 'Maroon', 'Military Green', 'Military Green Heather',
				'Natural', 'Neon Green', 'Neon Pink', 'Neon Yellow', 'Pacific Blue',
				'Purple', 'Raspberry Heather', 'Retro Heather Purple', 'Retro Heather Royal',
				'Retro Heather Coral', 'Retro Heather Green', 'Retro Heather Pink', 'Royal',
				'Safari', 'Safety Green', 'Safety Orange', 'Sagestone', 'Scuba Blue',
				'Silver', 'Sweet Cream Heather', 'Tennessee Orange', 'True Red',
				'Turquoise Heather', 'Vintage Heather Navy', 'White', 'Yellow'
			],
			sizes: ['adult']
		},
		"NL6210": {
			colors: [
				'Apple Green', 'Banana Cream', 'Black', 'Bondi Blue', 'Cardinal', 'Charcoal',
				'Cream', 'Dark Heather Gray', 'Espresso', 'Heather Cool Blue', 'Heather Light Pink',
				'Heather Maroon', 'Heather Mauve', 'Heather Redwood', 'Heather Slate Blue',
				'Heather Tan', 'Ice Blue', 'Indigo', 'Kelly Green', 'Light Olive', 'Midnight Navy',
				'Military Green', 'Mint', 'Neon Green', 'Neon Yellow', 'Orange', 'Purple Rush',
				'Red', 'Royal', 'Sand', 'Silk', 'Stone Gray', 'Storm', 'Tahiti Blue', 'Teal',
				'Turquoise', 'Warm Gray', 'White'
			],
			sizes: ['adult']
		},
		"NL6211": {
			colors: [
				'Black', 'Cardinal', 'Charcoal', 'Dark Heather Gray', 'Heather Columbia Blue',
				'Midnight Navy', 'Military Green', 'Red', 'Royal', 'White'
			],
			sizes: ['adult']
		},
		"NL9303": {
			colors: [
				'Antique Denim', 'Black', 'Black/Black', 'Desert Pink', 'Forest Green',
				'Galaxy Purple', 'Graphite Black', 'Heavy Metal', 'Lead Gray', 'Maroon',
				'Mauve', 'Midnight Navy', 'Military Green', 'Natural', 'Oxblood', 'Red',
				'Royal', 'Shitake', 'White'
			],
			sizes: ['adult']
		},
		"NL6051": {
			colors: [
				'Envy/Heather White', 'Envy/Premium Heather', 'Heather White/Vintage Black',
				'Indigo/Heather White', 'Premium Heather/Heather White', 'Premium Heather/Vintage Black',
				'Purple Rush/Heather White', 'Tahiti Blue/Heather White', 'Vintage Black/Heather White',
				'Vintage Black/Premium Heather', 'Vintage Black/Vintage Black', 'Vintage Navy/Premium Heather',
				'Vintage Pink/Heather White', 'Vintage Purple/Heather White', 'Vintage Red/Heather White',
				'Vintage Red/Premium Heather', 'Vintage Red/Vintage Black', 'Vintage Royal/Heather White',
				'Vintage Royal/Premium Heather'
			],
			sizes: ['adult']
		},
		"3001": {
			colors: [
				'Aqua', 'Army', 'Ash', 'Asphalt', 'Atlantic', 'Autumn', 'Baby Blue', 'Berry', 'Black',
				'Blue Storm', 'Brown', 'Burnt Orange', 'Canvas Red', 'Cardinal', 'Carolina Blue',
				'Charity Pink', 'Chestnut', 'Citron', 'Clay', 'Columbia Blue', 'Cool Blue', 'Coral',
				'Dark Grey', 'Dark Lavender', 'Dark Olive', 'Deep Teal', 'Dust', 'Dusty Blue',
				'Electric Blue', 'Evergreen', 'Forest', 'Fuchsia', 'Gold', 'Kelly', 'Lavender Blue',
				'Lavender Dust', 'Leaf', 'Light Blue', 'Light Violet', 'Lilac', 'Maize Yellow',
				'Marine', 'Maroon', 'Mauve', 'Military Green', 'Mint', 'Mustard', 'Natural', 'Navy',
				'Ocean Blue', 'Olive', 'Orange', 'Orchid', 'Oxblood Black', 'Peach', 'Pebble', 'Pine',
				'Pink', 'Poppy', 'Red', 'Royal Purple', 'Rust', 'Sage', 'Sand Dune', 'Silver', 'Slate',
				'Soft Cream', 'Soft Pink', 'Solid Athletic Grey', 'Spring Green', 'Steel Blue', 'Storm',
				'Strobe', 'Sunset', 'Synthetic Green', 'Tan', 'Teal', 'Team Navy', 'Team Purple',
				'Terracotta', 'Thyme', 'Toast', 'True Royal', 'Turquoise', 'Vintage Black',
				'Vintage Brown', 'Vintage Navy', 'Vintage White', 'White', 'Yellow'
			],
			sizes: ['adult']
		},
		"3501": {
			colors: [
				'Ash', 'Asphalt', 'Atlantic', 'Baby Blue', 'Berry', 'Black', 'Blue Storm',
				'Canvas Red', 'Cardinal', 'Carolina Blue', 'Chestnut', 'Citron', 'Dark Grey',
				'Dark Lavender', 'Forest', 'Gold', 'Kelly', 'Lavender Blue', 'Light Violet',
				'Maroon', 'Mauve', 'Military Green', 'Mint', 'Mustard', 'Natural', 'Navy',
				'Olive', 'Orange', 'Pink', 'Poppy', 'Red', 'Sand Dune', 'Silver', 'Soft Cream',
				'Steel Blue', 'Storm', 'Strobe', 'Team Purple', 'Teal', 'Terracotta', 'Toast',
				'True Royal', 'Vintage Black', 'Vintage Brown', 'Vintage Navy', 'White'
			],
			sizes: ['adult']
		},
		"1717": {
			colors: [
				'Banana', 'Bay', 'Berry', 'Black', 'Blossom', 'Blue Jean', 'Blue Spruce', 'Boysenberry',
				'Brick', 'Bright Orange', 'Bright Salmon', 'Burnt Orange', 'Butter', 'Celadon',
				'Chalky Mint', 'Chambray', 'Chili', 'China Blue', 'Citrus', 'Crimson', 'Crunchberry',
				'Cumin', 'Denim', 'Emerald', 'Espresso', 'Flo Blue', 'Granite', 'Grape', 'Graphite',
				'Grass', 'Grey', 'Hemp', 'Hydrangea', 'Ice Blue', 'Island Green', 'Island Reef',
				'Ivory', 'Khaki', 'Lagoon Blue', 'Light Green', 'Melon', 'Midnight', 'Moss', 'Mustard',
				'Mystic Blue', 'Navy', 'Neon Blue', 'Neon Cantaloupe', 'Neon Lemon', 'Neon Pink',
				'Neon Red Orange', 'Neon Violet', 'Orchid', 'Paprika', 'Peachy', 'Pepper', 'Periwinkle',
				'Red', 'Royal Caribe', 'Sage', 'Sandstone', 'Sapphire', 'Seafoam', 'Terracotta',
				'Topaz Blue', 'True Navy', 'Vineyard', 'Violet', 'Washed Denim', 'Watermelon', 'White',
				'Wine', 'Yam'
			],
			sizes: ['adult']
		}
		,
		"9018": {
			colors: [
				'Black', 'Blossom', 'Blue Jean', 'Boysenberry', 'Bright Salmon', 'Butter',
				'Chalky Mint', 'Chambray', 'China Blue', 'Crimson', 'Crunchberry', 'Denim',
				'Flo Blue', 'Granite', 'Grass', 'Grey', 'Heliconia', 'Ice Blue', 'Island Green',
				'Island Reef', 'Lagoon Blue', 'Melon', 'Neon Pink', 'Orchid', 'Pepper',
				'Royal Caribe', 'Seafoam', 'Terracotta', 'Topaz Blue', 'True Navy', 'Violet',
				'Washed Denim', 'Watermelon', 'White'
			],
			sizes: ['youth']
		}
		,
		"6014": {
			colors: [
				'Berry', 'Black', 'Blossom', 'Blue Jean', 'Blue Spruce', 'Boysenberry', 'Brick',
				'Bright Salmon', 'Burnt Orange', 'Butter', 'Chalky Mint', 'Chambray', 'China Blue',
				'Crimson', 'Crunchberry', 'Denim', 'Espresso', 'Flo Blue', 'Granite', 'Grape',
				'Graphite', 'Grass', 'Grey', 'Heliconia', 'Hemp', 'Hydrangea', 'Ice Blue',
				'Island Green', 'Island Reef', 'Ivory', 'Khaki', 'Lagoon Blue', 'Light Green',
				'Melon', 'Midnight', 'Mustard', 'Navy', 'Neon Pink', 'Neon Red Orange', 'Orchid',
				'Paprika', 'Peachy', 'Peony', 'Pepper', 'Red', 'Royal Caribe', 'Sandstone',
				'Seafoam', 'Terracotta', 'Topaz Blue', 'True Navy', 'Violet', 'Washed Denim',
				'Watermelon', 'White', 'Yam'
			],
			sizes: ['adult']
		}
		,
		"6030CC": {
			colors: [
				'Banana', 'Bay', 'Berry', 'Black', 'Blossom', 'Blue Jean', 'Blue Spruce', 'Boysenberry',
				'Brick', 'Bright Salmon', 'Burnt Orange', 'Butter', 'Celadon', 'Chalky Mint', 'Chambray',
				'Chili', 'China Blue', 'Crimson', 'Crunchberry', 'Cumin', 'Denim', 'Emerald', 'Flo Blue',
				'Granite', 'Grape', 'Graphite', 'Grass', 'Grey', 'Heliconia', 'Ice Blue', 'Island Green',
				'Island Reef', 'Ivory', 'Khaki', 'Lagoon Blue', 'Light Green', 'Melon', 'Midnight',
				'Moss', 'Mystic Blue', 'Neon Blue', 'Neon Red Orange', 'Orchid', 'Pepper', 'Periwinkle',
				'Red', 'Royal Caribe', 'Sage', 'Sandstone', 'Sapphire', 'Seafoam', 'Terracotta',
				'Topaz Blue', 'True Navy', 'Violet', 'Washed Denim', 'Watermelon', 'White', 'Wine'
			],
			sizes: ['adult']
		}
		,
		"350": {
			colors: [
				'Atomic Blue', 'Black', 'Cardinal', 'Carolina Blue', 'Coyote Brown', 'Deep Orange',
				'Deep Red', 'Forest Green', 'Gold', 'Grey Concrete', 'Grey Concrete Heather',
				'Iron Grey', 'Iron Grey Heather', 'Kelly Green', 'Lime Shock', 'Maroon',
				'Neon Orange', 'Neon Pink', 'Neon Yellow', 'Olive Drab Green', 'Purple', 'Sand',
				'Silver', 'Texas Orange', 'Tropic Blue', 'True Navy', 'True Navy Heather',
				'True Red', 'True Royal', 'True Royal Heather', 'Vegas Gold', 'White', 'Woodland Brown'
			],
			sizes: ['youth', 'adult']
		}
		,
		"PC380": {
			colors: [
				'Athletic Maroon', 'Carolina Blue', 'Charcoal', 'Dark Green', 'Deep Navy', 'Gold',
				'Grey Concrete', 'Jet Black', 'Neon Blue', 'Neon Green', 'Neon Orange', 'Neon Pink',
				'Neon Yellow', 'Red', 'Royal', 'Silver', 'Team Purple', 'True Royal', 'White'
			],
			sizes: ['youth', 'adult']
		}
		,
		"KP55": {
			colors: [
				'Aquatic Blue', 'Ash', 'Athletic Heather', 'Athletic Maroon', 'Charcoal',
				'Dark Green', 'Deep Navy', 'Gold', 'Jet Black', 'Kelly', 'Light Blue',
				'Lime', 'Orange', 'Purple', 'Red', 'Royal', 'Safety Green', 'Sand',
				'Sangria', 'White'
			],
			sizes: ['adult']
		}
		,
		"PC54V": {
			colors: [
				'Aquatic Blue', 'Athletic Heather', 'Charcoal', 'Dark Heather Grey',
				'Jet Black', 'Navy', 'Neon Pink', 'Red', 'Royal', 'White'
			],
			sizes: ['adult']
		}
		,
		"ST650": {
			colors: [
				'Black', 'Blue Lake', 'Deep Orange', 'Deep Red', 'Forest Green', 'Gold',
				'Grey Concrete', 'Iron Grey', 'Kelly Green', 'Lime Shock', 'Maroon',
				'Purple', 'Texas Orange', 'Tropic Blue', 'True Navy', 'True Red',
				'True Royal', 'Vegas Gold', 'White'
			],
			sizes: ['adult']
		}
		,
		"437M": {
			colors: [
				'Ash', 'Black', 'Black Heather', 'Burnt Orange', 'California Blue', 'Charcoal Grey',
				'Cyber Pink', 'Deep Purple', 'Forest Green', 'Gold', 'J Navy', 'Jade', 'Kelly',
				'Kiwi', 'Light Blue', 'Maroon', 'Oxford', 'Royal', 'Safety Green', 'Safety Orange',
				'Sandstone', 'Scuba Blue', 'Silver', 'True Red', 'White'
			],
			sizes: ['adult']
		}
		,
		"29M": {
			colors: [
				'Aquatic Blue', 'Ash', 'Athletic Heather', 'Azalea', 'Black', 'Black Heather',
				'Burnt Orange', 'California Blue', 'Cardinal', 'Charcoal Grey', 'Chocolate',
				'Classic Pink', 'Columbia Blue', 'Cool Mint', 'Crimson', 'Cyber Pink', 'Deep Purple',
				'Forest Green', 'Gold', 'Irish Green Heather', 'Island Yellow', 'J Navy', 'Jade',
				'Kelly', 'Khaki', 'Kiwi', 'Light Blue', 'Maroon', 'Military Green', 'Neon Green',
				'Neon Pink', 'Neon Yellow', 'Oxford', 'Royal', 'Safety Green', 'Safety Orange',
				'Sandstone', 'Scuba Blue', 'Silver', 'Tennessee Orange', 'True Red',
				'Vintage Heather Maroon', 'Vintage Heather Navy', 'Vintage Heather Red', 'Violet',
				'White', 'T. Orange', 'Kiwi'
			],
			sizes: ['adult']
		}
		,
		"996M": {
			colors: [
				'Ash', 'Athletic Heather', 'Black', 'Black Heather', 'Blush Pink', 'Burnt Orange',
				'California Blue', 'Cardinal', 'Charcoal Grey', 'Chocolate', 'Classic Pink',
				'Columbia Blue', 'Cool Mint', 'Cyber Pink', 'Deep Purple', 'Denim', 'Forest Green',
				'Gold', 'Golden Pecan', 'J Navy', 'Kelly', 'Khaki', 'Kiwi', 'Light Blue', 'Maroon',
				'Military Green', 'Military Grn Hth', 'Mustard Heather', 'Neon Green', 'Neon Pink',
				'Oatmeal Heather', 'Oxford', 'Periwinkle Blue', 'Retro Hth Coral', 'Rock', 'Royal',
				'Safari', 'Sandstone', 'Scuba Blue', 'Sunset Coral', 'Sweet Cream Hth', 'T. Orange',
				'True Red', 'Vint Hth Blue', 'Vint Hth Maroon', 'Vint Hth Navy', 'Vint Hth Red',
				'White', 'Sage', 'Safety Green', 'Safety Orange'
			],
			sizes: ['adult']
		}
		,
		"DM130": {
			colors: [
				'Aqua Heather', 'Black', 'Black Frost', 'Blush Frost', 'Charcoal', 'Classic Red',
				'Coyote Brown Heather', 'Deep Orange Heather', 'Deep Royal', 'Deepest Grey',
				'Desert Tan Heather', 'Flint Blue Heather', 'Fuchsia Frost', 'Green Frost',
				'Grey Frost', 'Heathered Charcoal', 'Heathered Dusty Peach', 'Heathered Dusty Sage',
				'Heathered Forest Green', 'Heathered Grey', 'Heathered Lavender',
				'Heathered Neptune Blue', 'Heathered Russet', 'Heathered Teal', 'Maritime Frost',
				'Maroon Frost', 'Military Green Frost', 'Natural', 'Navy Frost', 'New Navy',
				'Ochre Yellow Heather', 'Purple Frost', 'Red Frost', 'Royal Frost', 'Turquoise Frost',
				'White'
			],
			sizes: ['adult']
		}
		,
		"DT6000": {
			colors: [
				'Aqua', 'Awareness Pink', 'Black', 'Charcoal', 'Classic Red', 'Coyote Brown',
				'Deep Royal', 'Deep Smoke', 'Deepest Grey', 'Desert Rose', 'Desert Tan',
				'Dusty Peach', 'Eggplant', 'Electric Purple', 'Eucalyptus Blue', 'Evergreen',
				'Fiery Red', 'Flush Pink', 'Forest Green', 'Gardenia', 'Gold', 'Grey', 'Grey Frost',
				'Heathered Bright Turquoise', 'Heathered Brown', 'Heathered Cardinal',
				'Heathered Charcoal', 'Heathered Kelly Green', 'Heathered Navy', 'Heathered Purple',
				'Heathered Red', 'Heathered Royal', 'Ice Blue', 'Jewel Green', 'Kiwi Green',
				'Lemon Yellow', 'Light Heather Grey', 'Light Turquoise', 'Lime Shock', 'Maritime Blue',
				'Mint', 'Neon Pink', 'Neptune Blue', 'New Navy', 'Nostalgia Rose', 'Ochre Yellow',
				'Olive', 'Orange', 'Plum', 'Purple', 'Rosewater Pink', 'Royal Frost', 'Russet',
				'White', 'White Smoke'
			],
			sizes: ['adult']
		}
		,
		"N3142": {
			colors: [
				'Athletic Orange', 'Black', 'Brown', 'Cardinal', 'Coral', 'Electric Blue',
				'Forest Green', 'Fuchsia', 'Gold', 'Graphite', 'Kelly Green', 'Light Blue',
				'Light Lime', 'Light Yellow', 'Lime', 'Maroon', 'Melon', 'Military Green', 'Navy',
				'Olive', 'Pastel Blue', 'Pastel Mint', 'Pink', 'Purple', 'Royal', 'Safety Green',
				'Safety Orange', 'Safety Yellow', 'Salmon', 'Sand', 'Scarlet', 'Silver', 'Sky Blue',
				'Teal', 'Texas Orange', 'Vegas Gold', 'White'
			],
			sizes: ['youth', 'adult']
		}
		,
		"N3165": {
			colors: [
				'Athletic Orange', 'Black', 'Brown', 'Burnt Orange', 'Cardinal', 'Coral',
				'Electric Blue', 'Forest Green', 'Fuchsia', 'Gold', 'Graphite', 'Kelly',
				'Light Blue', 'Light Lime', 'Light Yellow', 'Lime', 'Maroon', 'Melon',
				'Military Green', 'Navy', 'Olive', 'Pastel Blue', 'Pastel Mint', 'Pink',
				'Purple', 'Royal', 'Safety Green', 'Safety Orange', 'Safety Yellow', 'Salmon',
				'Sand', 'Scarlet', 'Silver', 'Sky Blue', 'Teal', 'Vegas Gold', 'White'
			],
			sizes: ['youth', 'adult']
		},
		"OTHER": {
			colors: null,
			sizes: ['youth', 'adult']
	}};
	
	function updateColorOptions(styleSelect) {
        const orderItem = $(styleSelect).closest('.order-item');
        const colorSelect = orderItem.find('.color-select');
        const selectedStyle = $(styleSelect).val();
		const otherStyleInput = orderItem.find('.other-style-input');
        const otherColorInput = orderItem.find('.other-color-input');
        colorSelect.empty().append('<option value="">Select Color</option>');
		if (selectedStyle === 'OTHER') {
            colorSelect.hide();
            otherStyleInput.show();
            otherColorInput.show();
			console.log("Custom Style")
        } else {
			console.log("Not a Custome Style")
            colorSelect.show();
            otherStyleInput.hide();
            otherColorInput.hide();Object
			if (selectedStyle && styleOptions[selectedStyle] && styleOptions[selectedStyle["colors"]] !==null ) {
				colorSelect.empty().append('<option value="">Select Color</option>');
				colorSelect.prop('disabled', false);
				styleOptions[selectedStyle].colors.forEach(function(color) {
					colorSelect.append(`<option value="${color.toLowerCase()}">${color}</option>`);
				});
					} else {
							colorSelect.prop('disabled', true);
						}	
    	}
	};

		function updateSizeOptions(styleSelect) {
			const orderItem = $(styleSelect).closest('.order-item');
			const selectedStyle = $(styleSelect).val();
			const youthSizes = orderItem.find('.youth-sizes');
			const adultSizes = orderItem.find('.adult-sizes');
			 if (selectedStyle && styleOptions[selectedStyle]) {
					youthSizes.toggleClass('hidden', !styleOptions[selectedStyle].sizes.includes('youth'));
					adultSizes.toggleClass('hidden', !styleOptions[selectedStyle].sizes.includes('adult'));
				} else {
					youthSizes.addClass('hidden');
					adultSizes.addClass('hidden');
				}
		}

		function initializeOrderItem(orderItem) {
			const styleSelect = orderItem.find('.style-select');
			const otherStyleInput = $('<input type="text" class="other-style-input" placeholder="Enter custom style" style="display:none;">');
        	const otherColorInput = $('<input type="text" class="other-color-input" placeholder="Enter custom color" style="display:none;">');
			
			styleSelect.after(otherColorInput);
        	styleSelect.after(otherStyleInput);
			
			updateColorOptions(styleSelect);
			updateSizeOptions(styleSelect);
		}

		

		$(document).on('change', '.style-select', function() {
			updateColorOptions(this);
			updateSizeOptions(this);	
		});
	

		$('#addItem').click(function() {
			itemCount++;
			const newItem = $('.order-item').first().clone();
			newItem.find('input').val('');
			newItem.find('select').prop('selectedIndex', 0);
			newItem.find('.other-style-input, .other-color-input').remove();
			$('#orderItems').append(newItem);
			initializeOrderItem(newItem);
			window.scrollTo(0, document.body.scrollHeight);
		});

		$('#removeItem').click(function() {
			if (itemCount > 1) {
				$('.order-item').last().remove();
				itemCount--;
			}
		});

		$('#orderForm').submit(function(e) {
			e.preventDefault();
    
    		// Disable the submit button
			var $submitButton = $('#submitOrder');
			$submitButton.prop('disabled', true);
			$submitButton.text('Submitting...');
			grecaptcha.ready(function() {
				grecaptcha.execute('6LdbrQgoAAAAACBAG6krACkYavfxDssuhHL2iXFb', { action: 'submit' }).then(function(token) {
					var formData = $('#orderForm').serializeArray();
					var data = {
						orders: [],
						'Print Locations': [],
						recaptcha_token: token
					};
		
					// Process form fields
					$.each(formData, function(i, field) {
						if (field.name === 'Print Locations') {
							data['Print Locations'].push(field.value);
						} else if (!field.name.startsWith('Style') && !field.name.startsWith('Color') && !field.name.startsWith('Adult') && !field.name.startsWith('Y')) {
							data[field.name] = field.value;
						}
					});
		
					// Process order items
					$('.order-item').each(function(index) {
						var style = $(this).find('.style-select').val();
						var color = $(this).find('.color-select').val();
						if (style === 'OTHER') {
							style = $(this).find('.other-style-input').val();
							color = $(this).find('.other-color-input').val();
                    	}
		
						// Process youth sizes
						$(this).find('.youth-sizes input[type="number"]').each(function() {
							var size = $(this).attr('name');
							var quantity = parseInt($(this).val());
							if (quantity > 0) {
								data.orders.push({
									style: style,
									color: color,
									size: size,
									quantity: quantity
								});
							}
						});
		
						// Process adult sizes
						$(this).find('.adult-sizes input[type="number"]').each(function() {
							var size = $(this).attr('name');
							var quantity = parseInt($(this).val());
							if (quantity > 0) {
								data.orders.push({
									style: style,
									color: color,
									size: size,
									quantity: quantity
								});
							}
						});
					});
					const fileInput = document.getElementById('fileUpload');
					webhookUrl = "https://hooks.zapier.com/hooks/catch/19215577/2ugpaom/";
					const webhookData = new FormData();
					webhookData.append('projectName', data["Project/Event Name"]);
					if (fileInput.files.length > 0) {
						const file = fileInput.files[0];
						try {
					webhookData.append('fileName', file.name.split('.')[0]);
					webhookData.append('fileExtension', file.name.split('.').pop());
					webhookData.append('fileContent', file);
					fetch(webhookUrl, {
						method: 'POST',
						body: webhookData,
					})
					.then(response => response.json())
					.then(result => {
						console.log('Success:', result);
					})
					.catch(error => {
						console.error('Error:', error);
					});
 						} catch (error) {
                        console.error('No file was uploaded');
                        }}
					
					$.ajax({
						url: 'https://script.google.com/macros/s/AKfycbwztNKuX94j06OVLXOFmRbG6kEo0X-tCrYoI5wXLXbX_wjZPKXryBpqo-5QhthiZujo/exec',
						method: 'POST',
						contentType: 'application/x-www-form-urlencoded',
						data: JSON.stringify(data),
						success: function(response) {
							if (response.result === 'success') {
								$('#orderForm').hide();
								$('#thankYouMessage').show();
							} else {
								alert('There was an error submitting your order: ' + response.error);
								$submitButton.prop('disabled', false);
							}
						},
						error: function(xhr, status, error) {
							alert('There was an error submitting your order. Please try again.');
							$submitButton.prop('disabled', false);
						}
					});
				}).catch(function(error) {
					alert('There was an error with the security check. Please try again.');
					$submitButton.prop('disabled', false);
				});
			});
		});

    initializeOrderItem($('.order-item').first());
});