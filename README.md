# team5587.github.io

This is the public website for FRC Team 5587, Titan Robotics. The website is hosted at [frc5587.org](https://frc5587.org/), and makes use of Jekyll to reuse elements wherever possible

## Getting Started

### Install Dependencies

* Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) through this link for [x64](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.7.0-1/rubyinstaller-devkit-2.7.0-1-x64.exe) or [x86](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.7.0-1/rubyinstaller-devkit-2.7.0-1-x86.exe)-based systems. You can check for an installation of Ruby by running
    ```Shell
    $ ruby -v
    ```
    *It's strongly recommended to use Ruby v2.7.\* as it has the strongest long-term support for both Jekyll & Ruby itself.* 

* Install [Jekyll](https://jekyllrb.com/) and [Bundler](https://bundler.io/)
    ```Shell
    $ gem install bundler jekyll
    ```

### Build Site Locally

1. Clone repository and enter it
    ```Shell
    $ git clone https://github.com/frc5587/frc5587.github.io.git
    $ cd team5587.github.io
    ```
2. Install all build dependencies through Bundler
    ```Shell
    $ bundle install
    ```
3. Have Jekyll build the site for viewing on localhost
    ```Shell
    $ bundle exec jekyll serve
    ```
4. Open the link next to `Server address` in the output of the previous command in your favorite web browser to view the website with any changes you make locally

## License

This project is licensed under the MIT license - see  [LICENSE](LICENSE) for more information
