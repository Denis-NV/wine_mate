import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const ProducerIcon = props => {
  return (
    <SvgIcon viewBox="0 0 500 490" {...props}>
      <path
        d="M352.5,40.2c17.6-16,39.1-14.6,54.9-0.3c11.8,10.6,19,23.9,23.5,38.8c4.6,15.2,7.1,30.8,6.3,46.7
c-1.1,23.6-6.2,46.2-18.7,66.6c-7.1,11.6-16.2,21.1-29.1,26.5c-13.6,5.7-29.7,2.7-40.9-8.2c1.1-0.2,1.9-0.6,2.7-0.5
c11.1,0.1,19.4-5.3,26.3-13.4c11.3-13.4,17-29.4,20-46.3c1.9-10.7,3.1-21.7,2.8-32.6c-0.5-18.8-3.6-37.2-12.8-54
c-1.9-3.4-3.9-6.7-6.3-9.8C374.4,44.9,365.6,39.4,352.5,40.2z M313.8,449.2c9-1.3,17-5.5,23.9-11.6c11.9-10.7,19.8-24,24.9-38.9
c6.5-19,9.4-38.4,8-58.6c-0.9-13.5-3.1-26.5-7.8-39.1c-4.6-12.5-11-23.9-21.1-32.7c-14.1-12.2-30.1-15.9-47.7-5.9
c-2.4,1.4-4.6,3.1-7.9,5.3c4.8,0.6,8.2,0.7,11.4,1.6c10.9,2.9,17.6,10.8,23,20.1c11,18.9,13.3,39.9,13.9,61.1
c0.2,7.9-1.2,15.9-2.4,23.8c-2.3,16-7.1,31.2-16.5,44.6c-7.9,11.2-17.3,19.8-32.4,19.8C292,446.9,302.3,450.8,313.8,449.2z
M422.6,448.1c4.5,0.8,9.2,1.5,13.6,0.9c7.7-1.1,14.7-4.5,21.1-9.3c8.4-6.3,14.5-14.3,19.5-23.3c8.4-15,13.1-31.1,15.2-48.3
c2.7-22.1,1.1-43.6-6.1-64.6c-5.3-15.4-13.2-29.2-26.7-39c-15.2-11-35.1-10.4-50.3,3.4c1.1,0.2,2,0.5,2.9,0.5
c7.2-0.4,13.1,2.1,18.8,6.5c8.2,6.4,12.9,15,16.9,24.2c5.4,12.4,7.9,25.5,8.7,38.8c1.4,23-0.9,45.7-10.6,67c-3,6.6-6.8,13-11.1,18.7
c-7.2,9.6-17,15.2-29.7,14.9C409.9,443.6,415.9,446.8,422.6,448.1z M302.9,370.4c-3.1-5.1-8.7-6.1-13-2.2
c-7.9,7.2-8.6,28.2-1.2,35.9c4.5,4.7,8.9,4.4,12.8-1c3.8-5.1,5-11,4.6-16.3C306.1,379.6,304.9,373.7,302.9,370.4z M426.1,369.7
c-3.3-6.6-9.6-6.7-13.5-0.3c-1.7,2.9-3.2,6.1-3.8,9.4c-1.5,7.9-1,15.6,4.2,22.2c3.4,4.3,6.6,4.3,10.5,0.6c5.3-4.9,5.5-11.6,7-19.1
C429.2,378.8,428.2,374,426.1,369.7z M354.6,169.7c1,3.5,3.6,5.8,7.3,6.3c3.7,0.5,6.1-2,7.6-4.7c5.1-9.3,5.4-19,1.2-28.7
c-1.4-3.2-3.8-5.9-7.7-5.8c-3.9,0.1-6.3,2.9-7.5,6.1c-1.7,4.4-2.6,9.2-3.9,13.6C352.7,161.3,353.5,165.5,354.6,169.7z M42.1,308.6
c12.2-41.6,36.5-70.6,41-75.7c-0.6,0.1-1.2,0.1-1.7,0.2c-13.5,1.5-26,5.2-36.8,14.2c-10.7,8.9-18.7,19.8-24.9,32
c-15.6,31-21.1,63.9-16.6,98.4c3.2,24.9,12.2,47.4,28.5,66.8c9.4,11.2,21,18.8,35.7,21c2.7,0.4,5.4,0.8,8.1,1.2
c-19.3-24.9-31.8-51.1-37.2-78.1C32.9,362.5,34.3,335.6,42.1,308.6z M153.9,308c-12.3,41.6-14.8,104.4,41.8,169.1c0.6,0,1.2,0,1.8,0
c9.1-0.2,18.2-0.9,27.3-1.5c-23.3-27.6-38.1-56.9-44-87.4c-5.1-26.4-3.6-53.7,4.6-81c11.6-39.1,33.6-67.4,40.5-75.6h-30.4
C191.9,235.5,166.6,265.1,153.9,308z M72,388.1c-5-26.4-3.3-53.7,5-81c11.7-38.6,33.5-66.7,40.8-75.3l-32.1,2.8
c-3.3,3.7-28.4,32.7-40.7,75c-11.3,38.8-13.8,96.7,34.6,157.8c11.1,1.6,22.3,3.2,33.4,4.7C91.3,445.5,77.5,417.3,72,388.1z
M121.2,228.5C121.2,228.5,121.3,228.5,121.2,228.5l12.6,0c-27.2-76.3-19.9-135.4-8.9-171.5c5.8-19.2,13.3-34.2,19.4-44.5
c-2.3,0.4-4.6,0.7-6.8,1.1c-9.9,1.6-18.3,6.4-25.9,12.5c-11.4,9.2-19.8,20.8-26.1,33.8c-9.6,20-13.8,41.4-14.9,63.4
c-0.7,13.9,1,27.6,4.2,41.2c5.8,24.4,16.1,46.3,34.9,63.6c0.3,0.3,0.4,0.7,0.6,1.3L121.2,228.5C121.2,228.5,121.2,228.5,121.2,228.5
z M259.3,57c8.4-27.5,20.1-46.4,26.5-55.3c-9.1-0.3-18.1-0.4-27.2-0.6c-5.7,7.6-18.7,27-27.8,56.9c-10.9,35.9-18,94.5,9.3,170.5
h28.1C241,152.2,248.3,93.2,259.3,57z M168,228.5h26.8h34.3h7.8C209.8,152.2,217.1,93.2,228,57c8.5-28.2,20.6-47.2,26.9-56
c-2.1,0-4.1-0.1-6.2-0.1c-5.6-0.1-11.1,0.8-16.7,1c-13.4,0.3-26.7,0.9-39.9,3c-3.1,0.5-6.2,1-9.4,1.5c-6.5,9.7-16.6,27.2-24,51.6
C147.9,93.9,140.8,152.5,168,228.5z M239,231.4h-9.2c-3.5,4-28.9,33.7-41.5,76.5c-12.2,41.2-14.8,103.3,40.3,167.3
c3.5-0.3,7-0.5,10.5-0.7c8.5-0.5,17-1,25.5-1.7c3.8-0.3,7.5-1.2,12.1-2c-1.6-1.2-2.5-1.9-3.4-2.6c-13.4-9.5-23.7-21.6-31.4-36
c-15-28.2-20.5-58.3-18.1-90.1c1.4-17.9,5.1-35,12.1-51.5c8-19,19.2-35.6,36.2-47.6c7.2-5.1,14.8-9,22.9-11.3l-24.7-0.3L239,231.4
L239,231.4z M151.2,307c11.6-39.1,33.6-67.4,40.5-75.6H167h-31.1h-14c-3.6,4-29.2,33.7-42.2,76.5c-12.3,40.6-15.3,101.5,37.4,164.6
c1.4,0.2,2.7,0.4,4.1,0.5c11.1,1.4,22.2,1.9,33.3,2.8c2.4,0.2,4.9,0.1,7.3,0.2c10,0.3,20,0.9,30.1,0.9c-24.1-28-39.3-57.9-45.3-89
C141.5,361.7,143.1,334.4,151.2,307z M355,6.8c-16.9-1.5-33.8-3.4-50.8-4.4c-5-0.3-9.9-0.5-14.9-0.6c-5.9,8-18.5,27.2-27.3,56.3
c-10.9,35.9-18,94.5,9.3,170.5l57.2,0.6c-1-1.1-1.6-1.9-2.2-2.7c-5.3-7.5-11.2-14.8-15.9-22.7c-12.5-20.9-14.9-44.4-15.9-68.1
c-0.5-11.4,1-22.8,2.6-34.1c2.7-19.5,8.6-37.9,18.3-55c7.9-14,18.4-25.7,32.3-34.1c2.8-1.7,5.8-3.1,9-4.8
C355.7,7.2,355.4,6.8,355,6.8z M156,57c7-22.9,16.2-39.8,22.8-50c-10.2,1.6-20.5,3.3-30.7,4.9c-6.3,10.2-14.3,25.7-20.5,46.1
c-10.9,35.9-18,94.5,9.3,170.5h28C137.8,152.2,145,93.2,156,57z"
      />
    </SvgIcon>
  );
};

export default ProducerIcon;