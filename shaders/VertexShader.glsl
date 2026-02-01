
in vec3 vertex_pos;

uniform mat4 MVP;

void main(){
  vec4 v = vec4(vertex_pos, 1); // Transform to a homogeneous 3D 
  gl_Position = MVP * v;
}
