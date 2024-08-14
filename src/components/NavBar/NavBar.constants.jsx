export const NavItems = (props) => {

    return [
        {name: "Home", pageRef: props.mainRefs.home},
        {name: "Location", pageRef: props.mainRefs.location},
        {name: "Design", pageRef: props.mainRefs.design},
        {name: "Amenities", pageRef: props.mainRefs.amenities},
        {name: "Availability", pageRef: props.mainRefs.availability},
        {name: "History", pageRef: props.mainRefs.history},
        {name: "Agencies", pageRef: props.mainRefs.agency},
    ]
}