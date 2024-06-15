import React from 'react';

import Carousel from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

const MOCK_LENS_ITEMS = [
    {
        "name": "ML111",
        "min_focal_length": 50.0,
        "max_focal_length": null,
        "min_aperture": 2.0,
        "max_aperture": 16.0,
        "auto": null,
        "manual": null,
        "lens_mount_uuid": "79d5bf68-a56f-471c-903b-87045ee98635",
        "manufacturer_uuid": "f988a691-99a3-46d0-a232-70637626b668",
        "uuid": "f8ba6f41-f42a-4fcc-8755-9bcd031b0c39",
        "manufacturer": {
            "name": "Yashica",
            "alternate_name": null,
            "country": null,
            "uuid": "f988a691-99a3-46d0-a232-70637626b668"
        },
        "lens_mount": {
            "name": "C/Y",
            "uuid": "79d5bf68-a56f-471c-903b-87045ee98635"
        },
        "compatible_cameras": [
            {
                "uuid": "8b37c87f-b32d-466a-853d-40c7f6e35caa",
                "name": "FX-2 "
            }
        ]
    },
    {
        "name": "sonnar",
        "min_focal_length": 135.0,
        "max_focal_length": null,
        "min_aperture": 2.8,
        "max_aperture": 16.0,
        "auto": null,
        "manual": null,
        "lens_mount_uuid": "79d5bf68-a56f-471c-903b-87045ee98635",
        "manufacturer_uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e",
        "uuid": "2a4a933a-c026-4230-9852-26dd876a309a",
        "manufacturer": {
            "name": "Contax",
            "alternate_name": null,
            "country": null,
            "uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e"
        },
        "lens_mount": {
            "name": "C/Y",
            "uuid": "79d5bf68-a56f-471c-903b-87045ee98635"
        },
        "compatible_cameras": [
            {
                "uuid": "8b37c87f-b32d-466a-853d-40c7f6e35caa",
                "name": "FX-2 "
            }
        ]
    },
    {
        "name": "SMC Pentax-M",
        "min_focal_length": 50.0,
        "max_focal_length": null,
        "min_aperture": 22.0,
        "max_aperture": 2.0,
        "auto": null,
        "manual": null,
        "lens_mount_uuid": "a2b3c7aa-f398-4a20-ad4b-d09e962b0f5b",
        "manufacturer_uuid": "3009d264-f9f2-47c0-b2d3-8acf6cc4e0fa",
        "uuid": "8b0492f0-bceb-409e-b14a-5339bdb262c5",
        "manufacturer": {
            "name": "Pentax",
            "alternate_name": null,
            "country": null,
            "uuid": "3009d264-f9f2-47c0-b2d3-8acf6cc4e0fa"
        },
        "lens_mount": {
            "name": "PK Mount",
            "uuid": "a2b3c7aa-f398-4a20-ad4b-d09e962b0f5b"
        },
        "compatible_cameras": [
            {
                "uuid": "76e67b9a-ed43-463a-b5ec-91f3c7e13311",
                "name": "MV"
            },
            {
                "uuid": "6bf2623b-ef8e-475b-a276-020150884636",
                "name": "KM"
            },
            {
                "uuid": "d6b3acd1-430b-4655-9c1f-6846eb6371b3",
                "name": "K1000"
            }
        ]
    },
    {
        "name": "tessar4444",
        "min_focal_length": 28.0,
        "max_focal_length": 80.0,
        "min_aperture": 22.0,
        "max_aperture": 2.8,
        "auto": true,
        "manual": true,
        "lens_mount_uuid": "79d5bf68-a56f-471c-903b-87045ee98635",
        "manufacturer_uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e",
        "uuid": "6e4882c1-943c-42c3-8575-87b14db1df82",
        "manufacturer": {
            "name": "Contax",
            "alternate_name": null,
            "country": null,
            "uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e"
        },
        "lens_mount": {
            "name": "C/Y",
            "uuid": "79d5bf68-a56f-471c-903b-87045ee98635"
        },
        "compatible_cameras": [
            {
                "uuid": "8b37c87f-b32d-466a-853d-40c7f6e35caa",
                "name": "FX-2 "
            }
        ]
    },
    {
        "name": "planar555",
        "min_focal_length": 50.0,
        "max_focal_length": 100.0,
        "min_aperture": 22.0,
        "max_aperture": 2.0,
        "auto": true,
        "manual": true,
        "lens_mount_uuid": "79d5bf68-a56f-471c-903b-87045ee98635",
        "manufacturer_uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e",
        "uuid": "6dc65408-53ff-4026-b562-ef7fccdff1fb",
        "manufacturer": {
            "name": "Contax",
            "alternate_name": null,
            "country": null,
            "uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e"
        },
        "lens_mount": {
            "name": "C/Y",
            "uuid": "79d5bf68-a56f-471c-903b-87045ee98635"
        },
        "compatible_cameras": [
            {
                "uuid": "8b37c87f-b32d-466a-853d-40c7f6e35caa",
                "name": "FX-2 "
            }
        ]
    },
    {
        "name": "ML",
        "min_focal_length": 50.0,
        "max_focal_length": null,
        "min_aperture": 2.0,
        "max_aperture": 16.0,
        "auto": null,
        "manual": null,
        "lens_mount_uuid": "79d5bf68-a56f-471c-903b-87045ee98635",
        "manufacturer_uuid": "f988a691-99a3-46d0-a232-70637626b668",
        "uuid": "f8ba6f41-f42a-4fcc-8755-9bcd031b0c39",
        "manufacturer": {
            "name": "Yashica",
            "alternate_name": null,
            "country": null,
            "uuid": "f988a691-99a3-46d0-a232-70637626b668"
        },
        "lens_mount": {
            "name": "C/Y",
            "uuid": "79d5bf68-a56f-471c-903b-87045ee98635"
        },
        "compatible_cameras": [
            {
                "uuid": "8b37c87f-b32d-466a-853d-40c7f6e35caa",
                "name": "FX-2 "
            }
        ]
    },
    {
        "name": "Sonnar",
        "min_focal_length": 135.0,
        "max_focal_length": null,
        "min_aperture": 2.8,
        "max_aperture": 16.0,
        "auto": null,
        "manual": null,
        "lens_mount_uuid": "79d5bf68-a56f-471c-903b-87045ee98635",
        "manufacturer_uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e",
        "uuid": "2a4a933a-c026-4230-9852-26dd876a309a",
        "manufacturer": {
            "name": "Contax",
            "alternate_name": null,
            "country": null,
            "uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e"
        },
        "lens_mount": {
            "name": "C/Y",
            "uuid": "79d5bf68-a56f-471c-903b-87045ee98635"
        },
        "compatible_cameras": [
            {
                "uuid": "8b37c87f-b32d-466a-853d-40c7f6e35caa",
                "name": "FX-2 "
            }
        ]
    },
    {
        "name": "SMC Pentax-M",
        "min_focal_length": 50.0,
        "max_focal_length": null,
        "min_aperture": 22.0,
        "max_aperture": 2.0,
        "auto": null,
        "manual": null,
        "lens_mount_uuid": "a2b3c7aa-f398-4a20-ad4b-d09e962b0f5b",
        "manufacturer_uuid": "3009d264-f9f2-47c0-b2d3-8acf6cc4e0fa",
        "uuid": "8b0492f0-bceb-409e-b14a-5339bdb262c5",
        "manufacturer": {
            "name": "Pentax",
            "alternate_name": null,
            "country": null,
            "uuid": "3009d264-f9f2-47c0-b2d3-8acf6cc4e0fa"
        },
        "lens_mount": {
            "name": "PK Mount",
            "uuid": "a2b3c7aa-f398-4a20-ad4b-d09e962b0f5b"
        },
        "compatible_cameras": [
            {
                "uuid": "76e67b9a-ed43-463a-b5ec-91f3c7e13311",
                "name": "MV"
            },
            {
                "uuid": "6bf2623b-ef8e-475b-a276-020150884636",
                "name": "KM"
            },
            {
                "uuid": "d6b3acd1-430b-4655-9c1f-6846eb6371b3",
                "name": "K1000"
            }
        ]
    },
    {
        "name": "tessar",
        "min_focal_length": 28.0,
        "max_focal_length": 80.0,
        "min_aperture": 22.0,
        "max_aperture": 2.8,
        "auto": true,
        "manual": true,
        "lens_mount_uuid": "79d5bf68-a56f-471c-903b-87045ee98635",
        "manufacturer_uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e",
        "uuid": "6e4882c1-943c-42c3-8575-87b14db1df82",
        "manufacturer": {
            "name": "Contax",
            "alternate_name": null,
            "country": null,
            "uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e"
        },
        "lens_mount": {
            "name": "C/Y",
            "uuid": "79d5bf68-a56f-471c-903b-87045ee98635"
        },
        "compatible_cameras": [
            {
                "uuid": "8b37c87f-b32d-466a-853d-40c7f6e35caa",
                "name": "FX-2 "
            }
        ]
    },
    {
        "name": "planar",
        "min_focal_length": 50.0,
        "max_focal_length": 100.0,
        "min_aperture": 22.0,
        "max_aperture": 2.0,
        "auto": true,
        "manual": true,
        "lens_mount_uuid": "79d5bf68-a56f-471c-903b-87045ee98635",
        "manufacturer_uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e",
        "uuid": "6dc65408-53ff-4026-b562-ef7fccdff1fb",
        "manufacturer": {
            "name": "Contax",
            "alternate_name": null,
            "country": null,
            "uuid": "e42674f6-f5cb-491a-a6d6-464b2383344e"
        },
        "lens_mount": {
            "name": "C/Y",
            "uuid": "79d5bf68-a56f-471c-903b-87045ee98635"
        },
        "compatible_cameras": [
            {
                "uuid": "8b37c87f-b32d-466a-853d-40c7f6e35caa",
                "name": "FX-2 "
            }
        ]
    }
]

const MOCK_CAMERA_ITEMS = [
    {
        "name": "MV",
        "description": null,
        "alternate_name": null,
        "min_shutter_speed": 1.0,
        "max_shutter_speed": 0.001,
        "auto_focus": null,
        "shutter_priority": false,
        "aperture_priority": true,
        "bulb_mode": true,
        "self_timer": null,
        "manual": false,
        "battery_required": true,
        "uuid": "76e67b9a-ed43-463a-b5ec-91f3c7e13311",
        "manufacturer": {
            "name": "Pentax",
            "alternate_name": null,
            "country": null,
            "uuid": "3009d264-f9f2-47c0-b2d3-8acf6cc4e0fa"
        },
        "lens_mount": {
            "name": "PK Mount",
            "uuid": "a2b3c7aa-f398-4a20-ad4b-d09e962b0f5b"
        },
        "metering": null
    },
    {
        "name": "K1000",
        "description": null,
        "alternate_name": null,
        "min_shutter_speed": 1.0,
        "max_shutter_speed": 0.001,
        "auto_focus": null,
        "shutter_priority": false,
        "aperture_priority": false,
        "bulb_mode": true,
        "self_timer": null,
        "manual": true,
        "battery_required": false,
        "uuid": "d6b3acd1-430b-4655-9c1f-6846eb6371b3",
        "manufacturer": {
            "name": "Pentax",
            "alternate_name": null,
            "country": null,
            "uuid": "3009d264-f9f2-47c0-b2d3-8acf6cc4e0fa"
        },
        "lens_mount": {
            "name": "PK Mount",
            "uuid": "a2b3c7aa-f398-4a20-ad4b-d09e962b0f5b"
        },
        "metering": null
    },
    {
        "name": "KM",
        "description": null,
        "alternate_name": null,
        "min_shutter_speed": 1.0,
        "max_shutter_speed": 0.001,
        "auto_focus": null,
        "shutter_priority": false,
        "aperture_priority": false,
        "bulb_mode": true,
        "self_timer": null,
        "manual": true,
        "battery_required": false,
        "uuid": "6bf2623b-ef8e-475b-a276-020150884636",
        "manufacturer": {
            "name": "Pentax",
            "alternate_name": null,
            "country": null,
            "uuid": "3009d264-f9f2-47c0-b2d3-8acf6cc4e0fa"
        },
        "lens_mount": {
            "name": "PK Mount",
            "uuid": "a2b3c7aa-f398-4a20-ad4b-d09e962b0f5b"
        },
        "metering": null
    },
    {
        "name": "FX-2 ",
        "description": null,
        "alternate_name": null,
        "min_shutter_speed": 1.0,
        "max_shutter_speed": 0.001,
        "auto_focus": null,
        "shutter_priority": false,
        "aperture_priority": false,
        "bulb_mode": true,
        "self_timer": null,
        "manual": true,
        "battery_required": false,
        "uuid": "8b37c87f-b32d-466a-853d-40c7f6e35caa",
        "manufacturer": {
            "name": "Yashica",
            "alternate_name": null,
            "country": null,
            "uuid": "f988a691-99a3-46d0-a232-70637626b668"
        },
        "lens_mount": {
            "name": "C/Y",
            "uuid": "79d5bf68-a56f-471c-903b-87045ee98635"
        },
        "metering": null
    },
    {
        "name": "Nikkormat EL",
        "description": null,
        "alternate_name": null,
        "min_shutter_speed": 4.0,
        "max_shutter_speed": 0.001,
        "auto_focus": null,
        "shutter_priority": false,
        "aperture_priority": true,
        "bulb_mode": true,
        "self_timer": null,
        "manual": true,
        "battery_required": false,
        "uuid": "b901efcd-2049-4108-b53d-dcf66165e2c2",
        "manufacturer": {
            "name": "Nikon",
            "alternate_name": null,
            "country": null,
            "uuid": "6f6bcfb7-fc07-4278-a64f-c9f73d96893a"
        },
        "lens_mount": {
            "name": "Nikon F",
            "uuid": "6788f886-900f-4165-8d58-cca295fdf996"
        },
        "metering": null
    },
    {
        "name": "FG",
        "description": null,
        "alternate_name": null,
        "min_shutter_speed": 1.0,
        "max_shutter_speed": 0.001,
        "auto_focus": null,
        "shutter_priority": true,
        "aperture_priority": true,
        "bulb_mode": true,
        "self_timer": null,
        "manual": false,
        "battery_required": true,
        "uuid": "b7493510-3d85-49bb-8355-512bd8b3e915",
        "manufacturer": {
            "name": "Nikon",
            "alternate_name": null,
            "country": null,
            "uuid": "6f6bcfb7-fc07-4278-a64f-c9f73d96893a"
        },
        "lens_mount": {
            "name": "Nikon F",
            "uuid": "6788f886-900f-4165-8d58-cca295fdf996"
        },
        "metering": null
    },
    {
        "name": "FE",
        "description": null,
        "alternate_name": null,
        "min_shutter_speed": 8.0,
        "max_shutter_speed": 0.001,
        "auto_focus": null,
        "shutter_priority": false,
        "aperture_priority": true,
        "bulb_mode": true,
        "self_timer": null,
        "manual": true,
        "battery_required": true,
        "uuid": "5abec4b2-d77b-455f-b6d1-3b17a55cf0e4",
        "manufacturer": {
            "name": "Nikon",
            "alternate_name": null,
            "country": null,
            "uuid": "6f6bcfb7-fc07-4278-a64f-c9f73d96893a"
        },
        "lens_mount": {
            "name": "Nikon F",
            "uuid": "6788f886-900f-4165-8d58-cca295fdf996"
        },
        "metering": null
    }
]

const CarouselTemplate = (args) => {
  return (
        <Carousel {...args}></Carousel>
  );
};

const DEFAULT_LENS_ARGS= {    
    carouselIconSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDI8ii7dXXfvE3WdGU0KVwYwTTzID1f8u0MQ&usqp=CAU', 
    displayType: 'Lenses'
}

export const DefaultLensCarousel = CarouselTemplate.bind({});
DefaultLensCarousel.args = {
    ...DEFAULT_LENS_ARGS,
    displayItems: MOCK_LENS_ITEMS, 
};

const DEFAULT_CAMERA_ARGS= {    
    carouselIconSource: 'https://banner2.cleanpng.com/20180613/oaw/kisspng-computer-icons-camera-photography-clip-art-5b20c8921dac71.0983469715288751541216.jpg', 
    displayType: 'Cameras'
}

export const DefaultCameraCarousel = CarouselTemplate.bind({});
DefaultCameraCarousel.args = {
    ...DEFAULT_CAMERA_ARGS,
    displayItems: MOCK_CAMERA_ITEMS, 
};

