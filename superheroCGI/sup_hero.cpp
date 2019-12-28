#include <string>
#include <iostream>
#include "cpr/cpr.h"
using namespace std;

string token = "163220391589190";
string base_url = "https:////superheroapi.com//api//";

string read_api(string url){
	string url_content = url;
	//"";
	return url_content;
}

string search_hero(string hero_name)
{
	string url = base_url + token + "//search//" + hero_name;
	string json = read_api(url);
	return json;
}
int main(int argc, char** argv) {
    auto r = cpr::Get(cpr::Url{"https://api.github.com/repos/whoshuu/cpr/contributors"},
                      cpr::Authentication{"user", "pass"},
                      cpr::Parameters{{"anon", "true"}, {"key", "value"}});
    // r.status_code;                  // 200
    // r.headers["content-type"];      // application/json; charset=utf-8
    // r.text;                         // JSON text string
}
// int main(int argc, char** argv) {
	// cout << search_hero("man");
	// int i =0;
	
	
	 // // auto r = cpr::Get(cpr::Url{"https://api.github.com/repos/whoshuu/cpr/contributors"});
    // // r.status_code;                  // 200
    // // r.header["content-type"];       // application/json; charset=utf-8
    // // r.text;                         // JSON text string
	
	// cin >> i;
// }
