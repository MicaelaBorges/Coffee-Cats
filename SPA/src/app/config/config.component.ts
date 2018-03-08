
export interface Config {
    postsUrl: string;
    textfile: string;
  }
  
  config: Config;

showConfig() {
    this.configService.getConfig()
      .subscribe(data => this.config = {
          postsUrl: data['postsUrl'],
          textfile:  data['textfile']
      });
  }

