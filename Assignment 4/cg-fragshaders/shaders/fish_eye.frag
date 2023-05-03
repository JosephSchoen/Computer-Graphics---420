#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {  

    vec2 changed_texcoord = texcoord;
    changed_texcoord = (texcoord*2.0)-1.0;

    float theta = atan(changed_texcoord.y, changed_texcoord.x);

    float radius = pow(length(changed_texcoord), 1.5);
    vec2 fish_eye_texcoord = vec2(radius * cos(theta), radius * sin(theta));

    changed_texcoord.x = 0.5*(fish_eye_texcoord.x + 1.0);
    changed_texcoord.y = 0.5*(fish_eye_texcoord.y + 1.0);


    FragColor = texture(image, changed_texcoord);






}
