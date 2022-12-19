import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
import SendmailTransport from "nodemailer/lib/sendmail-transport/index.js";
import { sendMail } from "../middleware/sendMail.js";
import cloudinary from "cloudinary";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Login Successful",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged out Successful",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne().select("-password -email");
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const userMessage = `Hey I am ${name}.\nMy email is ${email}.\nMy message is ${message}.`;

    await sendMail(userMessage);

    return res.status(200).json({
      success: true,
      message: "Message Sent successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const { name, email, password, skills, about } = req.body;

    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }
    if (skills) {
      // image 1
      if (skills.image1) {
        await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
        const mycloud = await cloudinary.v2.uploader.upload(skills.image1, {
          folder: "protfolio",
        });

        user.skills.image1 = {
          public_id: mycloud.public_id,
          url: mycloud.secure_url,
        };
      }

      //image 2
      if (skills.image2) {
        await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
        const mycloud = await cloudinary.v2.uploader.upload(skills.image2, {
          folder: "protfolio",
        });

        user.skills.image2 = {
          public_id: mycloud.public_id,
          url: mycloud.secure_url,
        };
      }

      //image 3
      if (skills.image3) {
        await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
        const mycloud = await cloudinary.v2.uploader.upload(skills.image3, {
          folder: "protfolio",
        });

        user.skills.image3 = {
          public_id: mycloud.public_id,
          url: mycloud.secure_url,
        };
      }

      //image 4
      if (skills.image4) {
        await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
        const mycloud = await cloudinary.v2.uploader.upload(skills.image4, {
          folder: "protfolio",
        });

        user.skills.image4 = {
          public_id: mycloud.public_id,
          url: mycloud.secure_url,
        };
      }

      //image 5
      if (skills.image5) {
        await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
        const mycloud = await cloudinary.v2.uploader.upload(skills.image5, {
          folder: "protfolio",
        });

        user.skills.image5 = {
          public_id: mycloud.public_id,
          url: mycloud.secure_url,
        };
      }

      //image 6
      if (skills.image6) {
        await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
        const mycloud = await cloudinary.v2.uploader.upload(skills.image6, {
          folder: "protfolio",
        });

        user.skills.image6 = {
          public_id: mycloud.public_id,
          url: mycloud.secure_url,
        };
      }
    }

    if (about) {
      if(about.name){
        user.about.name = about.name;
      }
      if(about.title){
        user.about.title = about.title;
      }
      if(about.description){
        user.about.description = about.description;
      }
      if(about.quote){
        user.about.quote = about.quote;
      }

      if (about.avatar) {
        await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);

        const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: "portfolio",
        });

        user.about.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addTimeline = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const { title, description, date } = req.body;

    user.timeline.unshift({
      title,
      description,
      date,
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added to Timeline",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addYoutube = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const { url, title, image } = req.body;

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "portfolio",
    });

    user.youtube.unshift({
      url,
      title,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added to Youtube",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addProject = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const { url, title, image, description, techStack } = req.body;

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "portfolio",
    });

    user.projects.unshift({
      url,
      title,
      description,
      techStack,
      image: {
        public_id: myCloud.public_id,
        url: mycloud.secure_url,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added to Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete functions

export const deleteTimeline = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { id } = req.params;

    user.timeline = user.timeline.filter((item) => item._id != id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Timeline",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteYoutube = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { id } = req.params;

    const video = user.youtube.find((video) => video._id == id);

    await cloudinary.v2.uploader.destroy(video.image.public_id);

    user.youtube = user.youtube.filter((video) => video._id != id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Youtube",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { id } = req.params;

    const project = user.youtube.find((item) => item._id == id);

    await cloudinary.v2.uploader.destroy(project.image.public_id);

    user.projects = user.youtube.filter((item) => item._id != id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
